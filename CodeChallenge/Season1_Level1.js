// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 내적 (월간 코드 챌린지 1)
// 문제 내용 : 배열간의 곱의 합을 구하기

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer = answer + a[i] * b[i];
  }
  return answer;
}
