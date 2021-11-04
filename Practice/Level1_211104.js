// 풀이 날짜 : 21.11.04
// 출처 : 프로그래머스 - 두 정수 사이의 합
// 문제 내용 : 주어진 숫자 사이의 합을 도출하기

function solution(a, b) {
  let sum = 0;
  const counting = Math.abs(a - b);
  if (counting === 0) {
    return a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
    return sum;
  }
}

// 출처 : 프로그래머스 - 나누어 떨어지는 숫자 배열
// 문제 내용 : 주어진 숫자 배열 중 어떠한 숫자로 나누어 떨어지는 숫자들로만 이루어진 배열 만들기

function solution(arr, divisor) {
  let newArr = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
  if (newArr.length === 0) {
    return [-1];
  } else {
    return newArr;
  }
}
