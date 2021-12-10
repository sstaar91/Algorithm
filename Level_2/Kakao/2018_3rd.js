// 풀이 날짜 : 21.12.08
// 출처 : 프로그래머스 - n진수 게임
// 문제 내용 : 내가 말해야 하는 숫자를 출력해보자

function solution(n, t, m, p) {
  let answer = "";
  let nums = "";
  for (let i = 0; i <= t * m; i++) {
    nums += i.toString(n);
    if (nums.length < t * m) {
      continue;
    } else if (nums.length >= t * m) {
      break;
    }
  }

  for (let i = p - 1; i < t * m; i++) {
    if (i % m === p - 1) {
      answer += nums[i];
    }
  }
  return answer.toUpperCase();
}

// 풀이 날짜 : 21.12.10
// 출처 : 프로그래머스 - 압축
// 문제 내용 : 입력된 문자열을 사전방식으로 기록하는 압축 기술을 구현

function solution(msg) {
  let answer = [];
  let result = [];
  let msgArr = msg.split("");
  const dic = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < msgArr.length; i++) {
    if (dic.indexOf(msgArr[i] + msgArr[i + 1]) === -1) {
      result.push(msgArr[i]);
      dic.push(msgArr[i] + msgArr[i + 1]);
    } else {
      let newStr = msgArr[i] + msgArr[i + 1];
      msgArr[i + 1] = newStr;
    }
  }

  for (let i = 0; i < result.length; i++) {
    answer.push(dic.indexOf(result[i]) + 1);
  }
  return answer;
}
