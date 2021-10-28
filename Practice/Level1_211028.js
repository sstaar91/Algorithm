// 풀이 날짜 : 21.10.28
// 출처 : 프로그래머스 - 서울에서 김서방 찾기
// 문제 내용 : 들어온 배열에서 'Kim'을 찾아 김서방 위치 찾기

function solution(seoul) {
  var answer;
  return (answer = "김서방은 " + seoul.indexOf("Kim") + "에 있다");
}

// 출처 : 프로그래머스 - 문자열 다루기 기본
// 문제 내용 : 임의의 문자열이 숫자로만 이루어졌는지 판별

function solution(s) {
  let answer = true;
  const newArr = s.split("");
  if (newArr.length === 4 || newArr.length === 6) {
    for (let i = 0; i < newArr.length; i++) {
      if (isNaN(newArr[i]) === true) {
        answer = false;
        break;
      }
      answer = true;
    }
  } else {
    answer = false;
  }
  return answer;
}

// 출처 : 프로그래머스 - 문자열 내림차순으로 배치하기
// 문제 내용 : 문자열을 내림차순으로 정렬

function solution(s) {
  var answer = "";
  const newArr = s.split("");
  answer = newArr
    .sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      } else {
        return 0;
      }
    })
    .join("");
  return answer;
}

// 출처 : 프로그래머스 - 문자열 내 p와 y의 개수
// 문제 내용 : 문자열에서 p와 y의 개수를 비교하자

function solution(s) {
  var answer = true;
  const newArr = s.split("");
  const pCase = newArr.filter((a) => a.toLowerCase().includes("p")).length;
  const yCase = newArr.filter((a) => a.toLowerCase().includes("y")).length;

  if (pCase === yCase) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// 출처 : 프로그래머스 - 문자열 내 마음대로 정렬하기
// 문제 내용 : 문자열을 일정 기준에 따라 정렬하기

function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });
  return answer;
}
