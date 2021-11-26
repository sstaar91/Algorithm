// 풀이 날짜 : 21.11.26
// 출처 : 프로그래머스 - 멀쩡한 사각형
// 문제 내용 : 직사각형에서 대각선이 지나는 사각형을 제외한 정사각형의 갯수 구하기

const gcd = (a, b) => {
  if (a === 0) return b;
  return gcd(b % a, a);
};

function solution(w, h) {
  const minNum = gcd(w, h);
  return w * h - (w + h - minNum);
}
