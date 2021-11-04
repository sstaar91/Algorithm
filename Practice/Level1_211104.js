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
