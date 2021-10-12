// 풀이 날짜 : 21.10.12
// 출처 : 프로그래머스 - 크레인 인형뽑기 게임
// 문제 내용 : 뽑은 인형이 중복 되면 사라지고 사라진 인형의 수를 구하는 것

function solution(board, moves) {
  var answer = 0;
  let box = [];
  for (let i = 0; i < moves.length; i++) {
    for (let v = 0; v < board.length; v++)
      if (board[v][moves[i] - 1] > 0) {
        box.push(board[v][moves[i] - 1]);
        board[v][moves[i] - 1] = 0;
        break;
      }
    for (let i = 0; i < box.length; i++) {
      if (box[i] === box[i + 1]) {
        answer++;
        box.pop(box[i + 1]);
        box.pop(box[i]);
      }
    }
  }
  return answer * 2;
}
