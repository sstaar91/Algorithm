// 풀이 날짜 : 21.11.05
// 출처 : 프로그래머스 - 체육복
// 문제 내용 : 전체 학생 중 체육복을 입고 나갈 수 있는 학생 수가 몇명일까?

function solution(n, lost, reserve) {
  var answer = 0;
  let newArr = [];
  for (let i = 0; i < reserve.length; i++) {
    if (reserve.indexOf(lost[i]) > -1) {
      let minusNum = lost[i];
      lost.splice(lost.indexOf(minusNum), 1);
      reserve.splice(reserve.indexOf(minusNum), 1);
    }
  }
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
    if (lost.indexOf(i) > -1) {
      newArr.pop();
      if (reserve.indexOf(i) > -1) {
        newArr.push(i);
        reserve.splice(reserve.indexOf(i), 1);
      } else if (reserve.indexOf(i - 1) > -1) {
        newArr.push(i);
        reserve.splice(reserve.indexOf(i - 1), 1);
      } else if (reserve.indexOf(i + 1) > -1) {
        newArr.push(i);
        reserve.splice(reserve.indexOf(i + 1), 1);
      }
    }
  }
  return (answer = newArr.length);
}
