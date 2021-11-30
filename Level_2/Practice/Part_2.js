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
