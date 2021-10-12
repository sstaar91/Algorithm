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

// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 음양 더하기 (월간 코드 챌린지 2)
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

// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 없는 숫자 더하기 (월간 코드 챌린지 3)
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
