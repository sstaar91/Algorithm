// 풀이 날짜 : 21.11.11
// 출처 : 프로그래머스 - 다트 게임
// 문제 내용 : 다트게임의 총 점을 구하자

function solution(dartResult) {
  var answer = 0;
  let bonus = dartResult.split(/[0-9,*#]/).filter((el) => el !== "");
  let score = dartResult.split(/[A-Z,*#]/).filter((el) => el !== "");
  let option = dartResult
    .split(/[0-9]/)
    .filter((el) => el != "")
    .join()
    .split(/[A-Z]/)
    .join("")
    .split(",");
  const newArr = [];
  for (let i = 0; i < score.length; i++) {
    if (bonus[i] === "S") {
      newArr.push(Number(score[i]));
    } else if (bonus[i] === "D") {
      newArr.push(Number(score[i]) ** 2);
    } else {
      newArr.push(Number(score[i]) ** 3);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (option[i] === "*") {
      newArr[i] = newArr[i] * 2;
      newArr[i - 1] = newArr[i - 1] * 2;
    } else if (option[i] === "#") {
      newArr[i] = newArr[i] * -1;
    } else {
      newArr[i] = newArr[i];
    }
  }
  return (answer = newArr.reduce((a, b) => a + b));
}
