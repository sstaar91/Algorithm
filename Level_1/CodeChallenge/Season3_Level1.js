// 월간 코드 챌린지 3

// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 없는 숫자 더하기
// 문제 내용 : 인자에서 없는 숫자를 더해 결과 도출

function solution(numbers) {
  var answer = 0;
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numberArr.length; i++) {
    if (numbers.indexOf(numberArr[i]) < 0) {
      answer = answer + numberArr[i];
    }
  }
  return answer;
}

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
