const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,

    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,

    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    kill: 377,
    death: 630,
    assist: 858,
  },
];

const box = document.getElementById("box");
const p = document.createElement("p");
p.innerHTML = "hihi";
box.append(p);
const tbody = document.getElementById("tbody");
for (let index = 0; index < 10; index++) {
  const tr = document.createElement("tr");
  const rank = document.createElement("td");
  rank.innerHTML = teams[index].rank;
  const name = document.createElement("td");
  name.innerHTML = teams[index].name;
  const win = document.createElement("td");
  win.innerHTML = teams[index].win;
  const lose = document.createElement("td");
  lose.innerHTML = teams[index].lose;
  const winLoseDiff = document.createElement("td");
  winLoseDiff.innerHTML = teams[index].winLoseDiff;
  const winPer = document.createElement("td");
  winPer.innerHTML = teams[index].winPer;
  const kda = document.createElement("td");
  kda.innerHTML = teams[index].kda;
  const kill = document.createElement("td");
  kill.innerHTML = teams[index].kill;
  const death = document.createElement("td");
  death.innerHTML = teams[index].death;
  const assist = document.createElement("td");
  assist.innerHTML = teams[index].assist;

  tr.append(rank);
  tr.append(name);
  tr.append(win);
  tr.append(lose);
  tr.append(winLoseDiff);
  tr.append(winPer);
  tr.append(kda);
  tr.append(winLoseDiff);
  tr.append(kill);
  tr.append(death);
  tr.append(assist);

  tbody.append(tr);
}
