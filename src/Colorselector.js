import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/theme";

const Colorselector = () => {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(changeColor(color))}>change Color</button>
    </div>
  );
};

export default Colorselector;
