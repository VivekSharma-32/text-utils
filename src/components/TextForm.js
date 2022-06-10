import React, { useState } from "react";

function TextForm(props) {
  // declaring a variable
  const [text, setText] = useState("");

  // function to change the text in the textarea and event prop is used to change the text in the textarea input
  const handleOnChnange = (event) => {
    // console.log("Onchange event")
    setText(event.target.value);
  };

  // function to convert the text into uppercase letters
  const handleUpClick = () => {
    // console.log("uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")

  };

  // function to convert the text into lowercase letters
  const handleLowClick = () => {
    // console.log("uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  // function to clear the text
  const handleClearText = () => {
    // console.log("uppercase is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")

  };

  // function to copy the text
  const handleCopy = () => {
    // console.log("Copy text by selecting");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")

  };

  // function to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success")

  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            onChange={handleOnChnange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear all
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

export default TextForm;
