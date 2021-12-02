// 풀이 날짜 : 21.12.02
// 출처 : 프로그래머스 - 땅따먹기
// 문제 내용 : 땅따먹기 게임에서 가장 높은 점수는?

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  const result = land[land.length - 1].sort((a, b) => a - b);
  return result[result.length - 1];
}
