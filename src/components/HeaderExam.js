/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import sau from "../images/sau.png";
import { Link } from "react-router-dom";

const HeaderExam = () => {
  return (
    <div className="header" style={{ textAlign: "center" }}>
      <img src={sau} style={{ maxWidth: "10%" }} />
      <h3>React Test 2023</h3>
      <Link to="/" style={{ padding: 10 }}>
        ผู้พัฒนา
      </Link>
      <Link to="/taxical" style={{ padding: 10 }}>
        คำนวณค่าแท็กซี่
      </Link>
      <hr style={{ width: "50%" }} />
    </div>
  );
};

export default HeaderExam;
