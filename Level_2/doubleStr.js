// 풀이 날짜 : 21.12.13
// 출처 : 프로그래머스 - 짝지어 제거하기
// 문제 내용 : 어떤 문자 다음 문자가 같은 문자일 경우 제거하면서 전부 제거 되는지 아닌지를 확인하자

function solution(s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
