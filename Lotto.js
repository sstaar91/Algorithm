// 풀이 날짜 : 21.10.05
// 출처 : 프로그래머스 - 로또의 최고 순위와 최저 순위
// 문제 내용 : 로또 번호의 최고, 최저 순위를 확인하는 문제

function solution(lottos, win_nums) {
  let answer = [];
  let accordNum = 0;
  let count = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) >= 0) {
      accordNum += 1;
    }
    if (lottos[i] === 0) {
      count += 1;
    }
  }

  if (accordNum === 6) {
    answer.push(1);
  } else if (accordNum === 0) {
    answer.push(6);
  } else {
    answer.push(7 - accordNum);
  }

  if (count === 6) {
    answer.push(1);
  } else if (count === 0) {
    if (accordNum === 6) {
      answer.push(1);
    } else if (accordNum === 0) {
      answer.push(6);
    } else {
      answer.push(7 - accordNum);
    }
  } else {
    answer.push(7 - accordNum - count);
  }

  return answer.sort();
}
