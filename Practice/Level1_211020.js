// 풀이 날짜 : 21.10.20
// 출처 : 프로그래머스 - 정수 제곱근 판별
// 문제 내용 : 들어온 인자 값이 제곱근인지 판별하고 조건에 맞는 값 구하기

function solution(n) {
  var answer = 0;
  let sqrtNum = parseInt(Math.sqrt(n));
  if (sqrtNum * sqrtNum === n) {
    answer = (sqrtNum + 1) * (sqrtNum + 1);
  } else {
    answer = -1;
  }
  return answer;
}

// 출처 : 프로그래머스 - 정수 내림차순으로 배치하기
// 문제 내용 : 주어진 수를 내림차순으로 재정렬하기

function solution(n) {
  var answer = String(n);
  let arr = [];
  for (let i = 0; i < answer.length; i++) {
    arr.push(answer.slice(i, i + 1));
  }
  arr = arr.sort((a, b) => b - a).join("");
  answer = Number(arr);
  return answer;
}

// 출처 : 프로그래머스 - 자연수 뒤집어서 배열로 만들기
// 문제 내용 : 주어진 수의 자릿수를 뒤집어서 새로운 배열로 만들기

function solution(n) {
  let result = String(n);
  let arr = [];
  for (let i = result.length - 1; i >= 0; i--) {
    arr.push(Number(result[i]));
  }
  return arr;
}

// 출처 : 프로그래머스 - 자릿수 더하기
// 문제 내용 : 주어진 숫자의 자릿수를 더한 값을 반환

function solution(n) {
  let change = String(n).split("");
  let answer = 0;
  for (let i = 0; i < change.length; i++) {
    answer += Number(change[i]);
  }
  return answer;
}

// 출처 : 프로그래머스 - 이상한 문자 만들기
// 문제 내용 : 문자열 단어에서 짝수번째는 대문자로, 홀수번째는 소문자로 만들기

function solution(s) {
  let newArr = s.split(" ");
  let answer = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let l = 0; l < newArr[i].length; l++) {
      if (l % 2 === 0) {
        answer.push(newArr[i][l].toUpperCase());
      } else {
        answer.push(newArr[i][l].toLowerCase());
      }
    }
    if (i === newArr.length - 1) {
      break;
    } else {
      answer.push(" ");
    }
  }
  return (answer = answer.join(""));
}
