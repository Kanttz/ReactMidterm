/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Taxi from "../images/5444.jpg";

const TaxiCal = () => {
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calTaxi = () => {
    let result = 0;
    if (distance < 0) {
      setResult("Invalid input");
    } else if (distance <= 1) {
      result = 40;
    } else if (distance <= 10) {
      result = 40 + (distance - 1) * 6.5;
    } else if (distance <= 20) {
      result = 40 + 9.5 + (distance - 10) * 7;
    } else if (distance <= 40) {
      result = 40 + 9.5 + 14 + (distance - 20) * 8;
    } else if (distance <= 60) {
      result = 40 + 9.5 + 14 + 32 + (distance - 40) * 8.5;
    } else if (distance <= 80) {
      result = 40 + 9.5 + 14 + 32 + 30 + (distance - 60) * 9;
    } else {
      result = 40 + 9.5 + 14 + 32 + 30 + 30 + (distance - 80) * 10.5;
    }
    result += time * 3;
    setResult(result);
  };

  // const calTaxi2 = () => {
  //   let result = 0;
  //   switch (true) {
  //     case distance < 0:
  //       setResult("Invalid input");
  //       break;
  //     case distance <= 1:
  //       result = 40;
  //       break;
  //     case distance <= 10:
  //       result = 40 + (distance - 1) * 6.5;
  //       break;
  //     case distance <= 20:
  //       result = 40 + 9.5 + (distance - 10) * 7;
  //       break;
  //     case distance <= 40:
  //       result = 40 + 9.5 + 14 + (distance - 20) * 8;
  //       break;
  //     case distance <= 60:
  //       result = 40 + 9.5 + 14 + 32 + (distance - 40) * 8.5;
  //       break;
  //     case distance <= 80:
  //       result = 40 + 9.5 + 14 + 32 + 30 + (distance - 60) * 9;
  //       break;
  //     default:
  //       result = 40 + 9.5 + 14 + 32 + 30 + 30 + (distance - 80) * 10.5;
  //   }
  //   result += time * 3;
  //   setResult(result);
  // };

  useEffect(() => {
    calTaxi();
  }, [distance, time]);

  return (
    <div className="Taxi" style={{ textAlign: "center" }}>
      <img src={Taxi} style={{ maxWidth: "10%" }} />
      <h3>คำนวณค่าแท็กซี่</h3>
      <input
        className="input"
        type="number"
        placeholder="ระยะทาง (กิโลเมตร)"
        onChange={(e) => setDistance(e.target.value)}
      />
      <br />
      <input
        className="input"
        type="number"
        placeholder="เวลาที่รถติด (นาที)"
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <br />
      <h3 className="textarea">ค่าแท็กซี่ที่คำนวณได้ {result} บาท</h3>
    </div>
  );
};

export default TaxiCal;

// import React, { useState } from "react";
// import Taxi from "../images/5444.jpg";

// const TaxiCal = () => {
//   const [distance, setDistance] = useState(0);
//   const [time, setTime] = useState(0);
//   const [result, setResult] = useState(0);

//   const calTaxi = () => {
//     let result = 0;
//     if (distance <= 1) {
//       result = 40;
//     } else if (distance <= 10) {
//       result = 40 + (distance - 1) * 6.5;
//     } else if (distance <= 20) {
//       result = 40 + 9.5 + (distance - 10) * 7;
//     } else if (distance <= 40) {
//       result = 40 + 9.5 + 14 + (distance - 20) * 8;
//     } else if (distance <= 60) {
//       result = 40 + 9.5 + 14 + 32 + (distance - 40) * 8.5;
//     } else if (distance <= 80) {
//       result = 40 + 9.5 + 14 + 32 + 30 + (distance - 60) * 9;
//     } else {
//       result = 40 + 9.5 + 14 + 32 + 30 + 30 + (distance - 80) * 10.5;
//     }
//     result = result + time * 3;
//     result = Math.round(result);
//     setResult(result);
//   };

//   return (
//     <div className="Taxi" style={{ textAlign: "center" }}>
//       <img src={Taxi} style={{ maxWidth: "10%" }} />
//       <h3>คำนวณค่าแท็กซี่</h3>
//       <input
//         className="input"
//         type="number"
//         placeholder="ระยะทาง (กิโลเมตร)"
//         onChange={(e) => setDistance(e.target.value)}
//       />
//       <br />
//       <input
//         className="input"
//         type="number"
//         placeholder="เวลาที่รถติด (นาที)"
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <br />
//       <br />
//       <button className="button" onClick={calTaxi}>
//         คำนวณค่าแท็กซี่
//       </button>
//       <h3 className="textarea">ค่าแท็กซี่ที่คำนวณได้ {result} บาท</h3>
//     </div>
//   );
// };

// export default TaxiCal;
