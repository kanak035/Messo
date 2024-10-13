// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signupFields } from "../constants/formFields";
// import FormAction from "./FormAction";
// import Input from "./Input";
// import { baseUrl } from "../../../helper";

// const fields = signupFields;
// let fieldsState = {};

// fields.forEach((field) => (fieldsState[field.id] = ""));

// export default function Signup() {
//   const [signupState, setSignupState] = useState(fieldsState);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setSignupState({ ...signupState, [e.target.id]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(signupState);

//     try {
//       let response = await fetch(`${baseUrl}/register`, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(signupState),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       let result = await response.json();
//       console.log(result);
//       navigate("/login");

//       // Optionally, you can call createAccount or handle the result further here
//       // createAccount();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   //handle Signup API Integration here
//   // const createAccount = () => {};

//   return (
//     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//       <div className="">
//         {fields.map((field) => (
//           <Input
//             key={field.id}
//             handleChange={handleChange}
//             value={signupState[field.id]}
//             labelText={field.labelText}
//             labelFor={field.labelFor}
//             id={field.id}
//             name={field.name}
//             type={field.type}
//             isRequired={field.isRequired}
//             placeholder={field.placeholder}
//           />
//         ))}
//         <FormAction handleSubmit={handleSubmit} text="Signup" />
//       </div>
//     </form>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { baseUrl } from "../../../helper";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState({
    ...fieldsState,
    hostel_name: "BH-3", // Default value for the dropdown
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSelectChange = (e) =>
    setSignupState({ ...signupState, hostel_name: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupState);

    try {
      let response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupState),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let result = await response.json();
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Select = ({
    id,
    name,
    value,
    handleChange,
    labelText,
    isRequired,
    options,
  }) => (
    <div className="my-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {labelText}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={isRequired}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form className="mt-8 space-y-6 px-4" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <Select
          id="hostel_name"
          name="hostel_name"
          value={signupState.hostel_name}
          handleChange={handleSelectChange}
          labelText="Hostel Name"
          isRequired={true}
          options={[
            { value: "BH-2", label: "BH-2" },
            { value: "BH-3", label: "BH-3" },
          ]}
        />
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
