import { api } from "../components/network";

export const getAllBoards = async (data) => {
  const res = api("/api/boards", "get");
  return res;
};
export const postBoard = async (data) => {
  const res = api("/api/boards", "post", data);
  return res;
};
