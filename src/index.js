import React from "react";
import ReactDOM from "react-dom";

// const customStyle = {
// color : "purple",
// fontSize: "50px",
// border : "2px dashed yellow"
// }

// customStyle.color = "blue";

// ReactDOM.render(
// <div>
//   <h1 style= {{color : "red" }}> Hello World!</h1>
//   <h2 style = {customStyle}>Hi Palkin!!</h2>
// </div>,
// document.getElementById("root")
// );

// CHALLANGE

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good Morning!";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "green";
} else {
  greeting = "Good Night!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
