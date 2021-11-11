// 풀이 날짜 : 21.10.20
// 출처 : 프로그래머스 - 키패드 누르기
// 문제 내용 : 조건에 맞는 키패드를 눌렀을 때 어떤 손으로 눌렀는지 판단하기

function solution(numbers, hand) {
  var answer = "";
  const numL = [1, 4, 7, "*"];
  const numR = [3, 6, 9, "#"];
  const numC = [2, 5, 8, 0];
  let posL = [0, 3];
  let posR = [0, 3];
  let posC = [1, -1];

  for (let i = 0; i < numbers.length; i++) {
    if (numL.indexOf(numbers[i]) >= 0) {
      answer += "L";
      posL = [0, numL.indexOf(numbers[i])];
    } else if (numR.indexOf(numbers[i]) >= 0) {
      answer += "R";
      posR = [0, numR.indexOf(numbers[i])];
    } else {
      posC = [1, numC.indexOf(numbers[i])];
      let routeL = Math.abs(posC[0] - posL[0]) + Math.abs(posC[1] - posL[1]);
      let routeR = Math.abs(posC[0] - posR[0]) + Math.abs(posC[1] - posR[1]);
      if (routeL === routeR) {
        if (hand === "right") {
          answer += "R";
          posR = [1, numC.indexOf(numbers[i])];
        } else {
          answer += "L";
          posL = [1, numC.indexOf(numbers[i])];
        }
      } else {
        if (routeL < routeR) {
          answer += "L";
          posL = [1, numC.indexOf(numbers[i])];
        } else {
          answer += "R";
          posR = [1, numC.indexOf(numbers[i])];
        }
      }
    }
  }
  return answer;
}
