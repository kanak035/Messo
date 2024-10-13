// // import { useState } from "react";
// // import { loginFields } from "../constants/formFields";
// // import FormAction from "./FormAction";
// // import FormExtra from "./FormExtra";
// // import Input from "./Input";

// // import { useNavigate } from "react-router-dom";
// // const fields = loginFields;
// // let fieldsState = {};
// // fields.forEach((field) => (fieldsState[field.id] = ""));

// // export default function Login() {
// //   const [loginState, setLoginState] = useState(fieldsState);
// //   const navigate = useNavigate();
// //   const loginHandler = () => {
// //     navigate("/");
// //   };

// //   const handleChange = (e) => {
// //     setLoginState({ ...loginState, [e.target.id]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       let response = await fetch("http://localhost:5000/login", {
// //         method: "POST",
// //         mode: "cors",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(loginState),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       let result = await response.json();
// //       // console.log(result);
// //       if (result.message === "loggedin") {
// //         const val = JSON.stringify(result.token);

// //         localStorage.setItem("token", val);
// //         // setTimeout(localStorage.clear("token"), 50000);

// //         console.log(result.foundUser.isAdmin);
// //         function clearfunc() {
// //           console.log("hh");
// //           localStorage.removeItem("token");
// //           navigate("/");
// //         }
// //         setTimeout(clearfunc, 2000);

// //         if (result.foundUser.isAdmin === true) {
// //           localStorage.setItem("isAdmin", "true");
// //         } else {
// //           localStorage.setItem("isAdmin", "false");
// //         }

// //         window.location.href = "/"; // Redirect to home page on successful login
// //         localStorage.setItem("message", "loggedin");
// //       } else {
// //         window.location.href = "/signup"; // Redirect to register page on failed login
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //     // loginHandler();
// //     authenticateUser();
// //   };

// //   //Handle Login API Integration here
// //   const authenticateUser = () => {};

// //   return (
// //     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //       <div className="-space-y-px">
// //         {fields.map((field) => (
// //           <Input
// //             key={field.id}
// //             handleChange={handleChange}
// //             value={loginState[field.id]}
// //             labelText={field.labelText}
// //             labelFor={field.labelFor}
// //             id={field.id}
// //             name={field.name}
// //             type={field.type}
// //             isRequired={field.isRequired}
// //             placeholder={field.placeholder}
// //           />
// //         ))}
// //       </div>

// //       <FormExtra />
// //       <FormAction handleSubmit={handleSubmit} text="Login" />
// //     </form>
// //   );
// // }

// import { useState } from "react";
// import { loginFields } from "../constants/formFields";
// import FormAction from "./FormAction";
// import FormExtra from "./FormExtra";
// import Input from "./Input";
// import { useNavigate } from "react-router-dom";

// const fields = loginFields;
// let fieldsState = {};
// fields.forEach((field) => (fieldsState[field.id] = ""));

// export default function Login() {
//   const [loginState, setLoginState] = useState(fieldsState);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setLoginState({ ...loginState, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginState),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       let result = await response.json();
//       console.log("Login result:", result);

//       if (result.message === "loggedin") {
//         const token = JSON.stringify(result.token);
//         localStorage.setItem("token", token);

//         console.log("Token set in localStorage:", token);

//         if (result.foundUser.isAdmin) {
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           localStorage.setItem("isAdmin", "false");
//         }

//         localStorage.setItem("message", "loggedin");
//         navigate("/");
//         // This will run after 50 seconds (50000 milliseconds)
//         setTimeout(() => {
//           console.log("Clearing token from localStorage");
//           localStorage.removeItem("token");
//           localStorage.removeItem("isAdmin");
//           localStorage.removeItem("message");
//           navigate("/signup"); // Navigate to home page after clearing token
//         }, 500000);

//         // Navigate immediately to the home page
//       } else {
//         navigate("/signup"); // Redirect to register page on failed login
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//       <div className="-space-y-px">
//         {fields.map((field) => (
//           <Input
//             key={field.id}
//             handleChange={handleChange}
//             value={loginState[field.id]}
//             labelText={field.labelText}
//             labelFor={field.labelFor}
//             id={field.id}
//             name={field.name}
//             type={field.type}
//             isRequired={field.isRequired}
//             placeholder={field.placeholder}
//           />
//         ))}
//       </div>

//       <FormExtra />
//       <FormAction handleSubmit={handleSubmit} text="Login" />
//     </form>
//   );
// }

// Login.js
// import { useState } from "react";
// import { loginFields } from "../constants/formFields";
// import FormAction from "./FormAction";
// import FormExtra from "./FormExtra";
// import Input from "./Input";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../Auth/authProvider";

// const fields = loginFields;
// let fieldsState = {};
// fields.forEach((field) => (fieldsState[field.id] = ""));

// export default function Login() {
//   const [loginState, setLoginState] = useState(fieldsState);
//   const navigate = useNavigate();
//   const { setToken } = useAuth();

//   const handleChange = (e) => {
//     setLoginState({ ...loginState, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginState),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       let result = await response.json();
//       console.log("Login result:", result);

//       if (result.message === "loggedin") {
//         const token = result.token;
//         const name = result.name;
//         setToken(token); // Set token in context

//         if (result.foundUser.isAdmin) {
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           localStorage.setItem("isAdmin", "false");
//         }
//         console.log(name);
//         localStorage.setItem("name", name);
//         localStorage.setItem("message", "loggedin");

//         // Navigate immediately to the home page
//         navigate("/");
//       } else {
//         navigate("/signup"); // Redirect to register page on failed login
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//       <div className="-space-y-px">
//         {fields.map((field) => (
//           <Input
//             key={field.id}
//             handleChange={handleChange}
//             value={loginState[field.id]}
//             labelText={field.labelText}
//             labelFor={field.labelFor}
//             id={field.id}
//             name={field.name}
//             type={field.type}
//             isRequired={field.isRequired}
//             placeholder={field.placeholder}
//           />
//         ))}
//       </div>
//       {/*
//       <FormExtra /> */}
//       <FormAction handleSubmit={handleSubmit} text="Login" />
//     </form>
//   );
// }

// import { useState } from "react";
// import { loginFields } from "../constants/formFields";
// import FormAction from "./FormAction";
// import Input from "./Input";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../Auth/authProvider";
// import { baseUrl } from "../../../helper";

// const Login = () => {
//   const [loginState, setLoginState] = useState(
//     loginFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
//   );
//   const navigate = useNavigate();
//   const { setToken } = useAuth();

//   const handleChange = (e) => {
//     setLoginState({ ...loginState, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${baseUrl}/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginState),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       if (result.success) {
//         localStorage.setItem("name", result.foundUser.name);
//         console.log(result.foundUser.ObjectID);
//         setToken(result.token); // Set token which will also update isAdmin and isSuperAdmin
//         navigate("/app"); // Navigate to home on success
//       } else {
//         console.error(result.message); // Handle failure
//         navigate("/signup");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form className="mt-8 space-y-6 px-4" onSubmit={handleSubmit}>
//       {loginFields.map((field) => (
//         <Input
//           key={field.id}
//           handleChange={handleChange}
//           value={loginState[field.id]}
//           labelText={field.labelText}
//           labelFor={field.labelFor}
//           id={field.id}
//           name={field.name}
//           type={field.type}
//           isRequired={field.isRequired}
//           placeholder={field.placeholder}
//         />
//       ))}
//       <FormAction handleSubmit={handleSubmit} text="Login" />
//     </form>
//   );
// };

// export default Login;

import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Auth/authProvider";
import { baseUrl } from "../../../helper";

const Login = () => {
  const [loginState, setLoginState] = useState(
    loginFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );
  const [error, setError] = useState(""); // Add state to track error messages
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    setError(""); // Reset error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginState),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // localStorage.setItem("name", result.foundUser.name);
        console.log(result.foundUser.ObjectID);
        setToken(result.token); // Set token which will also update isAdmin and isSuperAdmin
        navigate("/app"); // Navigate to home on success
      } else {
        console.error(result.message); // Log error
        setError("Invalid username or password."); // Set error message for UI
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("Failed to log in. Please try again."); // Set more general error message for UI
    }
  };

  return (
    <form className="mt-8 space-y-6 px-4" onSubmit={handleSubmit}>
      {/* Display error message */}
      {loginFields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={loginState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}{" "}
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
