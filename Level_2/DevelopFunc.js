// 풀이 날짜 : 21.11.27
// 출처 : 프로그래머스 - 기능 개발
// 문제 내용 : 각 배포시기마다 몇개의 기능이 배포가 되는지 알아보자.

function solution(progresses, speeds) {
  const complete = [];
  const result = [];
  for (let i = 0; i < progresses.length; i++) {
    complete.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let count = 1;
  let standard = complete[0];
  for (let i = 0; i < complete.length; i++) {
    if (standard >= complete[i + 1]) {
      count = count + 1;
    } else {
      result.push(count);
      count = 1;
      standard = complete[i + 1];
    }
  }
  return result;
}
