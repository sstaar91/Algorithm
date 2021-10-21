// 풀이 날짜 : 21.10.21
// 출처 : 프로그래머스 - 모의고사
// 문제 내용 : 수포자가 문제를 찍는 방식에 따라서 어떤 학생이 가장 많은 문제를 맞췄는지 확인

function solution(answers) {
  var answer = [];
  const stu1 = [1, 2, 3, 4, 5];
  const stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let ans1 = answers.filter((a, i) => a === stu1[i % 5]).length;
  let ans2 = answers.filter((a, i) => a === stu2[i % 8]).length;
  let ans3 = answers.filter((a, i) => a === stu3[i % 10]).length;

  let max = Math.max(ans1, ans2, ans3);

  if (max === ans1) answer.push(1);
  if (max === ans2) answer.push(2);
  if (max === ans3) answer.push(3);

  return answer;
}
