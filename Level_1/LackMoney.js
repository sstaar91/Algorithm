// 풀이 날짜 : 21.11.09
// 출처 : 프로그래머스 - 부족한 금액 계산하기
// 문제 내용 : 놀이기구를 탔을 때, 부족한 금액 계산

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum > money ? (sum = sum - money) : (sum = 0);
}
