// 풀이 날짜 : 21.11.09
// 출처 : 프로그래머스 - 실패율
// 문제 내용 : 각 스테이지의 실패율을 구해 실패율이 높은 스테이지 순서로 정렬

function solution(N, stages) {
  let newArr = [];
  let totalStage = stages.length;
  for (let i = 1; i <= N; i++) {
    let stageNum = stages.filter((num) => num == i).length;
    let fail = 0;
    if (stageNum === 0) {
      fail = 0;
    } else {
      fail = stageNum / totalStage;
    }
    totalStage = totalStage - stageNum;
    newArr.push({ index: i, value: fail });
  }

  newArr.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value < b.value) {
      return 1;
    } else {
      if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  return newArr.map((list) => list.index);
}
