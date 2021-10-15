// 풀이 날짜 : 21.10.14
// 출처 : 프로그래머스 - 나머지가 1이 되는 수 찾기
// 문제 내용 : 인자로 들어온 숫자를 나눠서 1이 나오는 숫자 중 가장 작은 숫자 도출

function solution(n) {
  var answer = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}
