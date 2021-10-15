// 풀이 날짜 : 21.10.15
// 출처 : 프로그래머스 - K번째수
// 문제 내용 : 숫자 배열에서 조건에 따라 구별 된 숫자 배열의 K번째 수를 찾아라

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let sliceArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(sliceArr[commands[i][2] - 1]);
  }
  return answer;
}
