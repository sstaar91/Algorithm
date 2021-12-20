// 월간 코드 챌린지 1

// 풀이 날짜 : 21.12.20
// 출처 : 프로그래머스 - 이진 변환 반복하기
// 문제 내용 : 이진 변환을 반복해 0의 갯수와 변환 횟수를 구하자

function solution(s) {
  let newStr = s;
  const result = [];
  let one = 0;
  let zero = 0;
  let count = 0;
  while (newStr !== "1") {
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] === "1" ? one++ : zero++;
    }
    count++;
    newStr = one.toString(2);
    one = 0;
  }
  result.push(count);
  result.push(zero);
  return result;
}
