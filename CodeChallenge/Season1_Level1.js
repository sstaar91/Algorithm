// 월간 코드 챌린지 1

// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 내적
// 문제 내용 : 배열간의 곱의 합을 구하기

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer = answer + a[i] * b[i];
  }
  return answer;
}

// 풀이 날짜 : 21.10.20
// 출처 : 프로그래머스 - 두 개 뽑아서 더하기
// 문제 내용 : 숫자가 담긴 배열 중 아무 인덱스의 2개 숫자를 더해서 나온 값을 정렬해서 반환

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      let sum = numbers[i] + numbers[l];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
