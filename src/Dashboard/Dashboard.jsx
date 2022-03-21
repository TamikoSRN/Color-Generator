import React from "react";
import { useState } from "react";
import Values from "values.js";
import "./Dashboard.css";
import Color from "../EventsList/Color"

export default function Dashboard() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
      e.preventDefault()
      try{
          let colors = new Values(color).all(10)
          setList(colors) 
          setColor("")
      }
      catch(error){
          setError(error)
          console.log(error)
      }
  }

  return (
    <>
      <section className="container">
        <h3>Tami-kolors</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
            placeholder="Search for your colors here!"
          />
          <button className="btn" type="submit">
            Submit your color
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <Color key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
}
