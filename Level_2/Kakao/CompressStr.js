// 풀이 날짜 : 21.11.19
// 출처 : 프로그래머스 - 문자열 압축
// 문제 내용 : 문자열을 일정 조건에 따라 압축하고 난 뒤, 가장 짧은 문자열 반환

function chunkString(str, length) {
  return str.match(new RegExp(".{1," + length + "}", "g"));
}

function solution(s) {
  var answer = 0;
  let newArr = [];
  const lengthArr = [];
  for (let i = 0; i < s.length; i++) {
    let result = [];
    newArr = chunkString(s, i + 1);
    let count = 1;
    for (let l = 0; l < newArr.length; l++) {
      let stand = newArr[l];
      if (stand === newArr[l + 1]) {
        count++;
      } else {
        if (count === 1) {
          result.push(stand);
          stand = newArr[l + 1];
        } else {
          result.push(count);
          result.push(stand);
          count = 1;
          stand = newArr[l + 1];
        }
      }
    }
    lengthArr.push(result.join("").length);
    result = [];
  }
  return Math.min(...lengthArr);
}
