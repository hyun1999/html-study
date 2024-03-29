import { useState } from "react";
const Person = ({ age }) => {
  const [name, setName] = useState("박현서 바보");

  console.log("person");
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />

      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </>
  );
};

export default Person;
