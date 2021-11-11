// 풀이 날짜 : 21.11.05
// 출처 : 프로그래머스 - 폰켓몬
// 문제 내용 : 폰켓몬을 얻을 수 있는 최대 종류 구하기

function solution(nums) {
  var answer = 0;
  const categori = [...new Set(nums)];
  return nums.length / 2 < categori.length
    ? (answer = nums.length / 2)
    : (answer = categori.length);
}
