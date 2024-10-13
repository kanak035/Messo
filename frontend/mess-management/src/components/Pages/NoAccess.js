import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NoAccess = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>No Access</h1>
      <p>You do not have access to this page. Please log in.</p>
      <button onClick={redirectToHome}>
        Click here to go to the Home Page
      </button>
      <p>
        Or <Link to="/">return to the homepage</Link>.
      </p>
    </div>
  );
};

export default NoAccess;
