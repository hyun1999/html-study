import logo from "./logo.svg"; //이미지와 css를 먹일때 import를 사용해서 적용
import "./App.css";
import { useState } from "react";
// html 태그를 리턴하는 파일을 jsx (강제x)
// csr (client side rendering) ssr (server side rendering)
// 초기 속도(사이트 접속했을 때) csr이 압도적으로 느리고 ssr이 압도적으로 빠름
// 그후 부터의 속도는 csr이 빠르고 ssr이 느림
function App() {
  // css를 먹일때 className을 사용
  // [변수, set함수] = useState(초기값);
  const [name, setName] = useState("송희"); // 리스트에서 하나씩 가져와서 넣어준것이다
  let age = 26;
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState("500");
  const [height, setHeight] = useState("500");
  console.log("start"); //원래라면 js가 시작할때 바로 나와야하는데 state가 바뀔때 다시 호출이됨
  // 상태들을 갖고있는애가 필요한데 이 상태들을 갖고있는애가 reactDOM이다
  // 변수 쓸꺼면 useState 쓰면 처음 나오는값 = value, 두번째 값 = 함수
  const px = "px";
  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} />
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input type="range" onChange={(e) => setWidth(e.target.value + px)} />
      <input type="number" onChange={(e) => setHeight(e.target.value + px)} />
      <input type="number" onChange={(e) => (age = e.target.value)} />
      {/* useState로 reactDom에 바뀐값이 있니? 있으면 바꿔주는 역할을 함 */}
      {/* <input type="number" onChange={(e) => (age = e.target.value)} /> 이렇게 변수만 쓰면 reactDom에 확인을 못함*/}
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <div
        style={{
          width: width,
          // width: width + "px",
          height: height,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}

export default App;
