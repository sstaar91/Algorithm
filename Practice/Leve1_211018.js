// 풀이 날짜 : 21.10.18
// 출처 : 프로그래머스 - 직사각형 별찍기
// 문제 내용 : 주어진 가로 세로 길이를 이용해 별 문자열로 된 직사각형 만들기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let result = "";
    for (let l = 0; l < a; l++) {
      result = result + "*";
    }
    console.log(result);
  }
});

// 풀이 날짜 : 21.10.18
// 출처 : 프로그래머스 - x만큼 간격이 있는 n개의 숫자
// 문제 내용 : 주어진 x와 n을 이욯한 숫자 배열 만들기

function solution(x, n) {
  var answer = [];
  const add = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x = x + add;
  }
  return answer;
}
