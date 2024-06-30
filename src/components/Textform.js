import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleloclick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleclearclick = () => {
    // console.log("uppercase was clicked");
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking!", "success");
  };

  const handlCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.selectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success");
  };

  const handleonchange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");
  // setText("please enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary" onClick={handleclearclick}>
          Clear
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>

        <button className="btn btn-primary" onClick={handlCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(".").length - 1} Sentences {text.split(" ").length - 2}{" "}
          Words and {text.length - 1} Character and{" "}
          {text.split("\n").length - 1} Paragraph
        </p>
        <p>{0.008 * text.split(" ").length - 0.016} minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something in text box."}</p>
      </div>
    </>
  );
}
