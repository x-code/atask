import React from "react";
import "./layout.scss";

const Layout = (props) => {

  return (
    <div className="wrapper">
      <div id="content">
        <div id="contentLoader" className="content-wrapper">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
