// 풀이 날짜 : 21.12.11
// 출처 : 프로그래머스 - 타겟 넘버
// 문제 내용 : 숫자의 합이 타겟 넘버가 되는 경우의 수를 구하자

function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}
