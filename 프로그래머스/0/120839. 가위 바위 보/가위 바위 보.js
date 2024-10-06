function solution(rsp) {
  let str = "";
  for (let i = 0; i < rsp.length; i++) {
    str += rsp[i] === "0" ? "5" : rsp[i] === "2" ? "0" : rsp[i] === "5" ? "2" : "";
  }
  return str;
}