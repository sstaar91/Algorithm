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
