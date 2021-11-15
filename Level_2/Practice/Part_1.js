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

// 풀이 날짜 : 21.11.15
// 출처 : 프로그래머스 - 124 나라의 숫자
// 문제 내용 : 10진수를 124 나라에서 쓰는 방식으로 바꿔보자

function solution(n) {
  let answer = "";

  while (n > 0) {
    switch (n % 3) {
      case 1:
        answer = "1" + answer;
        n = parseInt(n / 3);
        break;
      case 2:
        answer = "2" + answer;
        n = parseInt(n / 3);
        break;
      case 0:
        answer = "4" + answer;
        n = n / 3 - 1;
        break;
    }
  }

  return answer;
}
