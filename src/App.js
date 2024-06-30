import React, { useState } from "react";

import "./App.css";
// import MyAbout from "./components/MyAbout";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled.", "success");
    }
  };
  return (
    // <Router>
    <div>
      <Navbar
        title="Textutils"
        abouttext="About"
        myhome="Home"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />
      <div className="container my-3">
        {/* <switch> */}
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<MyAbout></MyAbout>}></Route> */}

        {/* <Route
                exact
                path="/"
                element={ */}
        <Textform
          showAlert={showAlert}
          heading="Enter The text to analyze below"
          mode={mode}
        ></Textform>
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
        {/* </switch> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
