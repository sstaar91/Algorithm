// 풀이 날짜 : 21.12.02
// 출처 : 프로그래머스 - 땅따먹기
// 문제 내용 : 땅따먹기 게임에서 가장 높은 점수는?

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  const result = land[land.length - 1].sort((a, b) => a - b);
  return result[result.length - 1];
}

// 풀이 날짜 : 21.12.03
// 출처 : 프로그래머스 - 올바른 괄호
// 문제 내용 : 올바른 괄호가 있는 문자열인지 확인

function solution(s) {
  const arr = s.split("");
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") {
      t++;
    } else {
      t--;
    }
    if (t < 0) {
      break;
    }
  }
  return t == 0 ? true : false;
}

// 풀이 날짜 : 21.12.03
// 출처 : 프로그래머스 - 다음 큰 숫자
// 문제 내용 : 이진법으로 변경한 숫자의 1의 개수와 동일한 다음 큰 숫자 찾기

const checkNum = (num) => {
  const ones = num
    .toString(2)
    .split("")
    .filter((data) => data === "1");
  return ones.length;
};

function solution(n) {
  let standard = checkNum(n);
  for (let i = n + 1; i < n ** 2; i++) {
    if (standard === checkNum(i)) {
      return i;
      break;
    }
  }
}
