// 풀이 날짜 : 21.10.06
// 출처 : 프로그래머스 - 신규 아이디 추천
// 문제 내용 : 사용자가 작성한 아이디를 일정 규칙에 따라 다른 아이디로 추천해 주는 것

function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w\-\.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return answer.length > 2
    ? answer
    : answer.padEnd(3, answer[answer.length - 1]);
}
