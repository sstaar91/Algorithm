// 풀이 날짜 : 21.10.13
// 출처 : 프로그래머스 - 소수 만들기
// 문제 내용 : 주어진 숫자 배열에서 3개를 무작위로 더하고 해당 수가 소수인지 확인

function solution(nums) {
  var answer = 0;
  let sumNum = 0;
  let check = false;
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        sumNum = nums[x] + nums[y] + nums[z];
        for (let i = 2; i < sumNum; i++) {
          if (sumNum % i === 0) {
            check = false;
            break;
          } else {
            check = true;
          }
        }
        if (check === true) {
          answer++;
        }
      }
    }
  }
  return answer;
}
