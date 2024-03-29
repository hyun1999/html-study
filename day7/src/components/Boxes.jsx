import { useState } from "react";
import Box from "./Box";

const Boxes = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  return (
    <>
      <input
        type="range"
        onChange={(e) => setWidth(e.target.value * 10 + "px")}
      />
      <input
        type="range"
        onChange={(e) => setHeight(e.target.value * 10 + "px")}
      />
      <Box width={width} height={height} />
      <Box width={width} height={height} />
    </>
  );
};

export default Boxes;
