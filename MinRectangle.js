// 풀이 날짜 : 21.11.08
// 출처 : 프로그래머스 - 최소 직사각형
// 문제 내용 : 명함이 들어갈 수 있는 최소 직사각형을 구해라

function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
  }
  const W = [];
  const H = [];
  for (let i = 0; i < sizes.length; i++) {
    W.push(sizes[i][0]);
    H.push(sizes[i][1]);
  }
  W.sort((a, b) => b - a);
  H.sort((a, b) => b - a);
  return W[0] * H[0];
}
