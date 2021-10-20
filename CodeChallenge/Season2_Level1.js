//월간 코드 챌린지 2

// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 음양 더하기
// 문제 내용 : 절대값 배열과 음수, 양수 배열을 이용해 모든 배열의 합을 구하기

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer = answer + absolutes[i];
    } else {
      answer = answer + absolutes[i] * -1;
    }
  }
  return answer;
}

// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 약수의 개수와 덧셈
// 문제 내용 : 약수가 짝수면 더하고 홀수면 빼서 값을 확인하기

function solution(left, right) {
  var answer = 0;
  for (let i = left; i < right + 1; i++) {
    let count = 1;
    for (let l = 2; l < i + 1; l++) {
      if (i % l === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      answer = answer + i;
    } else {
      answer = answer - i;
    }
  }
  return answer;
}
