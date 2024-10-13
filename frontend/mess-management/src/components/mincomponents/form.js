import React, { useState } from "react";
import { useAuth } from "../../Auth/authProvider";
import { baseUrl } from "../../helper";

function ContactForm() {
  const [messageType, setMessageType] = useState("Complaint");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { userDetails } = useAuth();
  //extra
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const hostel_name = userDetails.hostelname;
  const email = userDetails.email;

  const handleTypeChange = (e) => {
    setMessageType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = {
    //   email: email,
    //   hostel_name: hostel_name,
    //   subject: subject,
    //   messageType: messageType,
    //   message: message,
    // };
    const data = new FormData(); // Using FormData to handle both text and file inputs
    data.append("email", email);
    data.append("hostel_name", hostel_name);
    data.append("subject", subject);
    data.append("messageType", messageType);
    data.append("message", message);
    if (file) {
      data.append("file", file); // Append the file if one is selected
    }

    try {
      const response = await fetch(`${baseUrl}/api/v1/sendComplaint`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
        body: data,
      });

      if (response.ok) {
        // Handle successful response
        console.log("Message sent successfully");
      } else {
        // Handle error response
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setMessage("");
    setSubject("");
    setFile(null);
    // setEmail("");
    e.target.reset();
  };

  return (
    <div className="lg:max-h-screen bg-neutral-200 flex items-center justify-center p-5">
      <div className="max-w-2xl w-full bg-neutral-900 p-10 rounded-lg shadow-lg m-auto">
        <h2 className="text-3xl font-bold text-white mb-6">
          Complaints & Suggestions
        </h2>
        <p className="text-gray-400 mb-6">
          Have concerns about the hostel mess? Want to provide feedback on meal
          quality or suggest improvements? We're here to help. Let us know.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400">
              Your email
            </label>
            {/* <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="name@iiitm.ac.in"
            /> */}
            <input
              type="email"
              id="email"
              value={email}
              readOnly // Make the input read-only
              className="w-full mt-2 p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded text-white placeholder-gray-400 focus:outline-none "
              placeholder="name@iiitm.ac.in"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-400">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="messageType" className="block text-gray-400">
              Message Type
            </label>
            <div className="flex mt-2">
              <label className="text-gray-400 mr-4">
                <input
                  type="radio"
                  name="messageType"
                  value="Complaint"
                  checked={messageType === "Complaint"}
                  onChange={handleTypeChange}
                  className="mr-2"
                />
                Complaint
              </label>
              <label className="text-gray-400">
                <input
                  type="radio"
                  name="messageType"
                  value="Suggestion"
                  checked={messageType === "Suggestion"}
                  onChange={handleTypeChange}
                  className="mr-2"
                />
                Suggestion
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-400">
              Upload an image (optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full mt-2 p-3 bg-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
