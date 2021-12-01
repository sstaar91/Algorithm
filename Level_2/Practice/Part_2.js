// 풀이 날짜 : 21.11.30
// 출처 : 프로그래머스 - JadenCase 문자열 만들기
// 문제 내용 : 문장에서 첫번째 글자를 대문자로 변경하자

function solution(s) {
  s = s.toLowerCase();
  const newArr = s
    .split(" ")
    .map((item) => {
      const arr = item.split("");
      if (arr[0] != null) {
        arr[0] = arr[0].toUpperCase();
      }
      return arr.join("");
    })
    .join(" ");
  return newArr;
}

// 풀이 날짜 : 21.12.01
// 출처 : 프로그래머스 - 피보나치 수
// 문제 내용 : 피보나치 수로 된 배열에서 해당 숫자를 가져오기

function solution(n) {
  const newArr = [0];
  let num = 1;
  for (let i = 0; i < n; i++) {
    newArr.push(num % 1234567);
    num = (newArr[i] % 1234567) + (newArr[i + 1] % 1234567);
  }
  return newArr[n];
}
