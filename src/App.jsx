import logo from "./logo.svg";
import "./App.css";

import React from "react";
const renderContent = () => {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Eya Maatki</h1>
        <br />
        <img src="assets/img2.jpg" alt="Src" />
        <br />
        <img src="assets\img1.jpg" alt="Public" />
        <br />
        <video width="320" height="240" controls>
          <source src="" type="" />
        </video>
      </div>
    </div>
  );
};
export default renderContent;
