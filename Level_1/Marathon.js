// 풀이 날짜 : 21.10.15
// 출처 : 프로그래머스 - 완주하지 못한 선수
// 문제 내용 : 참가자 중  완주하지 못한 선수를 찾기

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
