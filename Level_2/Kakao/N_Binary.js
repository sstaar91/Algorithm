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
