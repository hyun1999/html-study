import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "@emotion/css";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      {/* js에서 스타일을 줄 수 있기 때문에 css in js이라고 함 */}
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <div className="box"></div>
      <div className="box"></div>

      <div
        className={css`
          width: 200px;
          height: 200px;
          background-color: ${color};
          &:hover {
            background-color: blue;
            transition: all 1s;
            transform: rotate(900deg);
            fontsize
            
          }
        `}
      ></div>
    </>
  );
}

export default App;
