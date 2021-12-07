// 풀이 날짜 : 21.12.06
// 출처 : 프로그래머스 - 숫자의 표현
// 문제 내용 : 어떤 자연수를 연속된 숫자로 표현하기

function solution(n) {
  let answer = 0;
  let num = 1;
  while (num <= n) {
    let sum = 0;
    for (let i = num; i <= n; i++) {
      sum += i;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
    num++;
  }
  return answer;
}

// 풀이 날짜 : 21.12.07
// 출처 : 프로그래머스 - 최솟값 만들기
// 문제 내용 : 두개의 배열에서 곱한 수를 더한 것 중 최솟값 찾기

function solution(A, B) {
  const arrA = A.sort((a, b) => a - b);
  const arrB = B.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < arrA.length; i++) {
    answer += arrA[i] * arrB[i];
  }
  return answer;
}
