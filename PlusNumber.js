function solution(numbers) {
  var answer = 0;
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numberArr.length; i++) {
    if (numbers.indexOf(numberArr[i]) < 0) {
      answer = answer + numberArr[i];
    }
  }
  return answer;
}
