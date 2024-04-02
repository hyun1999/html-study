import { useState } from "react";
import ViewCount from "../components/ViewCount";
import ChangeCount from "../components/ChangeCount";
import LogCount from "../components/LogCount";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = document.getElementById("input");
    setCount(count + Number(value));
    document.getElementById("input").value = 0;
    setLogs([
      ...logs,
      { number: Number(value), date: new Date().toLocaleString() },
    ]);
  };

  return (
    <div className="container">
      {/* count 보여주는 곳 */}
      <ViewCount count={count} />
      {/* count 바꿔주는 곳 */}
      <ChangeCount onSubmit={onSubmit} />
      <hr className="m-4" />
      <LogCount logs={logs} />
    </div>
  );
};

export default Counter;
