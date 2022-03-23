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
      }, 1200)
      return() => clearTimeout(timeOut)
  }, [alert])

  return (
    <article
      className={`color ${index > 12 && 'color-light'}`}
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
          alert && <p className="alert">Color copied into the clipboard!</p>
      }
    </article>
  );
};

export default Color;