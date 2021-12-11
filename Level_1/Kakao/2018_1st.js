// 풀이 날짜 : 21.11.10
// 출처 : 프로그래머스 - 비밀지도
// 문제 내용 : 비밀지도를 해독해 '#' 과 공백으로 구성 된 문자열을 출력하자

function solution(n, arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < n; i++) {
      let length = 0;
      let mix = arr1[i] | arr2[i];
      let data = "";
      while (length < n) {
        data = (mix % 2) + data;
        mix = parseInt(mix / 2);
        length++;
      }
      let changeNum = data.replace(/1/g, "#").replace(/0/g, " ");
      newArr.push(changeNum);
    }
    return newArr;
  }
  

// 풀이 날짜 : 21.11.11
// 출처 : 프로그래머스 - 다트 게임
// 문제 내용 : 다트게임의 총 점을 구하자

function solution(dartResult) {
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
    return newArr.reduce((a, b) => a + b));
  }
  