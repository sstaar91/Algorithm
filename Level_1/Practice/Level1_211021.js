// 풀이 날짜 : 21.10.21
// 출처 : 프로그래머스 - 약수의 합
// 문제 내용 : 주어진 수의 약수들의 합을 구하라

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 출처 : 프로그래머스 - 시저 암호
// 문제 내용 : 알파벳 문자열을 일정 간격씩 밀면서 새로운 문자열을 생성하기

function solution(s, n) {
  var answer = "";
  const lowAl = "abcdefghijklmnopqrstuvwxyz".split("");
  const upAl = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let newArr = s.split("");

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " ") {
      answer += " ";
    } else {
      if (lowAl.indexOf(newArr[i]) >= 0) {
        let lowNum = lowAl.indexOf(newArr[i]) + n;
        lowNum > 25
          ? (answer += lowAl[lowNum - 26])
          : (answer += lowAl[lowNum]);
      } else if (upAl.indexOf(newArr[i]) >= 0) {
        let upNum = upAl.indexOf(newArr[i]) + n;
        upNum > 25 ? (answer += upAl[upNum - 26]) : (answer += upAl[upNum]);
      }
    }
  }
  return answer;
}

// 출처 : 프로그래머스 - 문자열을 정수로 바꾸기
// 문제 내용 : 문자열을 부호에 유의해 정수로 바꾸기

function solution(s) {
  var answer = 0;
  let newArr = s.split("");
  let newStr = "";
  if (newArr[0] === "-") {
    newArr.splice(0, 1);
    newStr = newArr.join("");
    answer = Number(newStr) * -1;
  } else {
    newStr = newArr.join("");
    answer = Number(newStr);
  }
  return answer;
}

// 출처 : 프로그래머스 - 수박수박수박수박수박수?
// 문제 내용 : 기준이 되는 숫자가 짝수인지 홀수인지에 따라 반복하는 문자열을 반환하기

function solution(n) {
  var answer = "";
  if (n % 2 === 0) {
    answer = "수박".repeat(n / 2);
  } else {
    answer = "수박".repeat((n - 1) / 2) + "수";
  }
  return answer;
}

// 출처 : 프로그래머스 - 소수 찾기
// 문제 내용 : 입력된 숫자부터 1까지의 사이 중 소수가 몇개인지 반환

function solution(n) {
  var answer = 0;
  let deArr = [2];
  for (let i = 3; i < n + 1; i++) {
    let check = true;
    for (let l = 0; l < deArr.length; l++) {
      if (i % deArr[l] === 0) {
        check = false;
        break;
      }
    }
    if (check === true) {
      deArr.push(i);
    }
  }
  return (answer = deArr.length);
}
