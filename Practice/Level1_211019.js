// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 평균 구하기
// 문제 내용 : 숫자 배열의 평균 값을 구하기

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 콜라츠 추측
// 문제 내용 : 어떤 수가 짝수면 2로 나누고, 홀수면 3을 곱한 뒤 1을 더해 결국 어떤 수가 1이 될 때까지 작업한 횟수 구하기

function solution(num) {
  var answer = 0;
  for (let i = 0; i <= 500; i++) {
    if (i === 500) {
      answer = -1;
      break;
    } else if (num === 1) {
      answer = i;
      break;
    } else {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    }
  }
  return answer;
}

// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 최대 공약수와 최소 공배수
// 문제 내용 : 배열 안의 두 숫자의 최대 공약수와 최소 공배수를 구하기

function solution(n, m) {
  var answer = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }
  for (let l = m; l <= n * m; l++) {
    if (l % n === 0 && l % m === 0) {
      answer.push(l);
      break;
    }
  }
  return answer;
}

// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 짝수와 홀수
// 문제 내용 : 인자로 들어온 수가 짝수인지 홀수인지 판단하기

function solution(num) {
  var answer = "";
  return num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
}

// 풀이 날짜 : 21.10.19
// 출처 : 프로그래머스 - 제일 작은 수 제거하기
// 문제 내용 : 숫자 배열에서 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (minNum > arr[i]) {
        minNum = arr[i];
      }
    }
    arr.splice(arr.indexOf(minNum), 1);
    answer = arr;
  }
  return answer;
}
