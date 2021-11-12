// 풀이 날짜 : 21.11.12
// 출처 : 프로그래머스 - N개의 최소공배수
// 문제 내용 : 배열의 숫자들 중 최소공배수 구하기

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}
