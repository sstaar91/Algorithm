// 풀이 날짜 : 21.11.10
// 출처 : 프로그래머스 - 비밀지도
// 문제 내용 : 비밀지도를 해독해 '#' 과 공백으로 구성 된 문자열을 출력하자

function solution(n, arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < n; i++) {
    let length = 0;
    let mix = arr1[i] | arr2[i];
    let data = "";
    while (length < n) {
      data = (mix % 2) + data;
      mix = parseInt(mix / 2);
      length++;
    }
    let changeNum = data.replace(/1/g, "#").replace(/0/g, " ");
    newArr.push(changeNum);
  }
  return newArr;
}
