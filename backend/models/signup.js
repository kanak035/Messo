const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  hostel_name: {
    type: String,
    required: [true, "Hostel Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  // confirm_password: {
  //   type: String,
  //   required: [true, "Confirm Password is required"],
  // },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
});

signupSchema.statics.findAndValidate = async function (email, password) {
  try {
    const foundUser = await this.findOne({ email });
    if (!foundUser) return false;
    const isValid = await bcrypt.compare(password, foundUser.password);

    return isValid ? foundUser : false;
  } catch (e) {
    return e;
  }
};

signupSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  // this.confirm_password = await bcrypt.hash(this.confirm_password, 12);
  next();
});

// signupSchema.methods.createJWT = function () {
//   return jwt.sign({ userID: this._id }, "thisisgood", {
//     expiresIn: "10s",
//   });
// };

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;
