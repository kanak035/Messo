// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
// import AuthProvider from "./Auth/authProvider";
// import RoutesConfig from "./RoutesConfig";

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <RoutesConfig />
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Auth/authProvider";
import RoutesConfig from "./RoutesConfig";// kanak

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoutesConfig />
      </AuthProvider>
    </Router>
  );
}
export default App;
