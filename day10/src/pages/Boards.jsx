// pages/Boards.jsx

import { useEffect, useState } from "react";
import Article from "../atom/Article";
import Button from "../atom/Button";
import Input from "../atom/Input";
import { getAllBoards, postBoard } from "../api/board";

const Boards = () => {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    try {
      const res = await postBoard({ title, content });
      document.getElementById("content").value = "";
      document.getElementById("title").value = "";
      console.log(res);
    } catch (error) {
      setMsg(error.response.data);
    }
  };
  const getBoards = async () => {
    const { data } = await getAllBoards();

    setData(data);
    console.log(boards);
  };
  useEffect(() => {
    if (data.length !== 0) setIsLoading(false);
  }, [data]);
  useEffect(() => {
    getBoards();
  }, []);
  return (
    <Article>
      <p>{msg}</p>
      {/* add */}
      <form onSubmit={onSubmit}>
        <Input placeholder="title" id="title" />
        <Input placeholder="content" id="content" />
        <Button>add</Button>
      </form>
      {/* list view */}
      <button onClick={getBoards}>getBoardsgetBoards</button>
      {isLoading ? (
        <p>loading</p>
      ) : (
        data.map((el) => (
          <Article key={el.id}>
            <p>
              {el.isMe && "*"} {el.title}
            </p>
            <p>{el.content}</p>
          </Article>
        ))
      )}
    </Article>
  );
};

export default Boards;
