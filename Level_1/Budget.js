// 풀이 날짜 : 21.11.08
// 출처 : 프로그래머스 - 예산
// 문제 내용 : 예산을 지원 받는 최대 부서 구하기

function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget = budget - d[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}
