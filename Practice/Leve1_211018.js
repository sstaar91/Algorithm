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

// 풀이 날짜 : 21.10.18
// 출처 : 프로그래머스 - 행렬의 덧셈
// 문제 내용 : 같은 크기의 배열에서 같은 인덱스에 있는 값을 더하기

function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

// 풀이 날짜 : 21.10.18
// 출처 : 프로그래머스 - 핸드폰 번호 가리기
// 문제 내용 : 번호에서 뒷번호 4자리를 제외한 번호를 가리기

function solution(phone_number) {
  var answer = "";
  let backNum = phone_number.slice(
    phone_number.length - 4,
    phone_number.length
  );
  answer = "*".repeat(phone_number.length - 4) + backNum;
  return answer;
}

// 풀이 날짜 : 21.10.18
// 출처 : 프로그래머스 - 하샤드 수
// 문제 내용 : 어떤 수의 자릿수를 다 더한 값으로 어떤 수를 나눴을 때 나누어 떨어지는 수 찾기

function solution(x) {
  var answer = true;
  let digit = String(x).split("");
  let Num = 0;
  for (let i = 0; i < digit.length; i++) {
    Num = Num + Number(digit[i]);
  }
  return x % Num === 0 ? (answer = true) : (answer = false);
}
