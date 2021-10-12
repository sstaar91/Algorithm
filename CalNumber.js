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
