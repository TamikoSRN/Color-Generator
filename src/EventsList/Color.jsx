import { useState, useEffect } from "react";
import rgbToHex from "../Utils/Utils";

const Color = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
      const timeOut = setTimeout(() =>{
          setAlert(false)
      }, 1500)
      return() => clearTimeout(timeOut)
  }, [alert])

  return (
    <article
      classname={`color${index > 10 && "color-light"}`}
      style={{
        background: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {
          alert && <p className="alert">Color copied to clipboard!</p>
      }
    </article>
  );
};

export default Color;