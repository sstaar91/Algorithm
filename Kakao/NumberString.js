// 풀이 날짜 : 21.10.07
// 출처 : 프로그래머스 - 숫자 문자열과 영단어
// 문제 내용 : 숫자와 문자가 혼합 되있는 문자열을 숫자로 변환

function solution(s) {
  var answer = s;
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < num.length; i++) {
    let arr = answer.split(num[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
