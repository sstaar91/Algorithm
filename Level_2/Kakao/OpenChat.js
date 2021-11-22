// 풀이 날짜 : 21.11.22
// 출처 : 프로그래머스 - 오픈 채팅방
// 문제 내용 : 오픈 채팅방 메세지를 출력하자

function solution(record) {
  let answer = [];
  let newArr = record.map((str) => str.split(" "));
  let nickNameSet = {};

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length === 3) {
      nickNameSet[newArr[i][1]] = newArr[i][2];
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "Enter") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 들어왔습니다.");
    } else if (newArr[i][0] === "Leave") {
      answer.push(nickNameSet[newArr[i][1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
