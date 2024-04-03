// 통신 http 데이터를 받아오고 넣는 작업을 할거다
// url, method, body

import axios from "axios";

export const api = async (url, method, body) => {
  axios.defaults.baseURL = "http://192.168.80.4:4000";
  const res = await axios({
    url,
    method,
    data: body,
    headers: {
      Authorization: localStorage.getItem("id"),
    },
  });
  return res;
};
