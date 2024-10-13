// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
// const cors = require("cors");
// const newUser = require("./models/signup");
// const logins = require("./models/login");
// const session = require("express-session");

// const port = 5000;
// const sessionOptions = {
//   secret: "thisisnotsecret",
//   resave: false,
//   saveUninitialized: false,
// };
// const flash = require("connect-flash");
// const HR_route = require("./my-routes/HR_route");
// const menus = require("./my-routes/menus");
// const announce_route = require("./my-routes/announce_route");
// const complaints_route = require("./my-routes/complaint_route");
// mongoose
//   .connect("mongodb+srv://messo:1234@messo.gmb5mku.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(session(sessionOptions));
// app.use(flash());
// app.use((req, res, next) => {
//   res.locals.message = req.flash();
//   next();
// });
// app.use("/api/v1", HR_route);
// app.use("/api/v1", complaints_route);
// app.use("/api/v1", menus);
// app.use("/api/v1", announce_route);
// const requireLogin = (req, res, next) => {
//   if (!req.session.user_id) {
//     return res.redirect("/login");
//   }
//   next();
// };

// // app.get("/", (req, res) => {
// //   res.send("Home page");
// //   console.log("Welcome to home page");
// // });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const foundUser = await newUser.findAndValidate(email, password);
//   if (!email || !password) {
//     res.json("please provide email and password");
//   }
//   if (!foundUser) res.json("invalid credentials");

//   console.log(foundUser);
//   if (foundUser) {
//     req.flash("info", "Login successful");
//     console.log("Login successful");

//     const token = foundUser.createJWT();
//     res.json({
//       success: true,
//       message: "loggedin",
//       foundUser: {
//         email: foundUser.email,
//         isAdmin: foundUser.isAdmin,
//       },
//       name: foundUser.name,
//       token,
//     });
//     // res.json({ status: "exist", message: "Login successful" });
//     // req.session.user_id = foundUser._id;
//   } else {
//     // req.flash("failed", "Login failed");
//     // res.json({ status: "notexist", message: "Login failed" });
//   }
// });

// app.post("/register", async (req, res) => {
//   const { name, hostel_name, email, password, confirm_password } = req.body;
//   const users = await newUser.find({ email });
//   if (users) {
//     console.log("Already registered");
//   }
//   const user = new newUser({
//     name,
//     hostel_name,
//     email,
//     password,
//     confirm_password,
//   });
//   console.log(user);
//   await user.save();

//   const token = user.createJWT();
//   res.status(200).json({
//     success: true,
//     message: "User updated successfully",
//     user: {
//       email: user.email,
//       name: user.name,
//     },
//     token,
//   });
//   // req.session.user_id = user._id;
//   console.log("Hey User");
//   // res.redirect("/");
// });

// app.post("/logout", (req, res, next) => {
//   req.session.user_id = null;
//   res.redirect("/login");
// });

// app.listen(5000, () => {
//   console.log(`Server started at port ${port}...`);
// });
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const newUser = require("./models/signup");
const session = require("express-session");
const verifyToken = require("../backend/middleware/verifyToken");
const port = process.env.PORT || 5000;
const sessionOptions = {
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
};
const flash = require("connect-flash");
const HR_route = require("./my-routes/HR_route");
const menus = require("./my-routes/menus");
const announce_route = require("./my-routes/announce_route");
const complaints_route = require("./my-routes/complaint_route");

// JWT Secret Keys (should ideally be in environment variables)
const accessTokenSecret = process.env.SECRET_KEY;
const refreshTokenSecret = process.env.SECRET_KEY;
let refreshTokens = [];

mongoose
  .connect("mongodb+srv://messo:1234@messo.gmb5mku.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.message = req.flash();
  next();
});
app.use("/api/v1", HR_route);
app.use("/api/v1", complaints_route);
app.use("/api/v1", menus);
app.use("/api/v1", announce_route);

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      isSuperAdmin: user.isSuperAdmin,
      isAdmin: user.isAdmin,
      email: user.email,
      name: user.name,
      hostelname: user.hostel_name,
      ObjectID: user._id,
    },
    accessTokenSecret,
    {
      expiresIn: "15m",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      isSuperAdmin: user.isSuperAdmin,
      isAdmin: user.isAdmin,
      email: user.email,
      name: user.name,
      hostelname: user.hostel_name,
      ObjectID: user._id,
    },
    refreshTokenSecret
  );
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await newUser.findAndValidate(email, password);
  if (!email || !password) {
    return res.status(400).json("Please provide email and password");
  }
  if (!foundUser) {
    console.log("Error");
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = generateAccessToken(foundUser);
  const refreshToken = generateRefreshToken(foundUser);
  refreshTokens.push(refreshToken);
  res.json({
    success: true,
    message: "Logged in successfully",
    foundUser: {
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
      isSuperAdmin: foundUser.isSuperAdmin,
      name: foundUser.name,
      ObjectID: foundUser._id,
    },
    token: accessToken,
    refreshToken,
  });
});

app.post("/register", async (req, res) => {
  const { name, hostel_name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  const existingUser = await newUser.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  const user = new newUser({ name, hostel_name, email, password });
  await user.save();

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      email: user.email,
      name: user.name,
    },
    token: accessToken,
    refreshToken,
  });
});

app.post("/logout", verifyToken, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  req.session.user_id = null;
  res.json({ message: "Logged out successfully" });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
