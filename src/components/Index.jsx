import React, { useEffect, useState } from "react";
import "./Styles.css";

const Index = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => Math.floor(Math.random() * length);

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <h3>Random Color</h3>
      <div className="button">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="nameOfColor">
        <h2 style={{ color: color }}>
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h2>
        <h4 style={{ color: color }}>{color}</h4>
      </div>
    </div>
  );
};

export default Index;
