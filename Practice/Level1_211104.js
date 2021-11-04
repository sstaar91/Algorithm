// 풀이 날짜 : 21.11.04
// 출처 : 프로그래머스 - 두 정수 사이의 합
// 문제 내용 : 주어진 숫자 사이의 합을 도출하기

function solution(a, b) {
  let sum = 0;
  const counting = Math.abs(a - b);
  if (counting === 0) {
    return a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    for (let i = a; i <= b; i++) {
      sum = sum + i;
    }
    return sum;
  }
}

// 출처 : 프로그래머스 - 나누어 떨어지는 숫자 배열
// 문제 내용 : 주어진 숫자 배열 중 어떠한 숫자로 나누어 떨어지는 숫자들로만 이루어진 배열 만들기

function solution(arr, divisor) {
  let newArr = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
  if (newArr.length === 0) {
    return [-1];
  } else {
    return newArr;
  }
}

// 출처 : 프로그래머스 - 같은 숫자는 싫어
// 문제 내용 : 주어진 배열에서 중복을 제거한 숫자 배열을 다시 도출

function solution(arr) {
  var answer = [];
  let num = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num !== arr[i]) {
      answer.push(arr[i]);
      num = arr[i];
    }
  }
  return answer;
}

// 출처 : 프로그래머스 - 가운데 글자 가져오기
// 문제 내용 : 문자열의 가운데 글자 가져오기

function solution(s) {
  var answer = "";
  const remainder = s.length % 2;
  const middleNum = parseInt(s.length / 2);
  if (remainder === 1) {
    answer = s[middleNum];
  } else {
    answer = s.slice(middleNum - 1, middleNum + 1);
  }
  return answer;
}
