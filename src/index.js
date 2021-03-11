//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1> Hello </h1>
    <ul>
      <li> How </li>
      <li>Are </li>
      <li>You </li>
    </ul>
  </div>,
  document.getElementById("root")
);
