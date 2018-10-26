// let answer;
// let score = 0;
const victoryEl = document.querySelector('.victory');
const loseEl = document.querySelector('.lose');
const scoreEl = document.querySelector('.score');
const outEl = document.querySelector('.out');

let currentAmount = 0;

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = [];
for (let i = 0; i < 3; i++) {
  let select = Math.floor(Math.random() * list.length);
  number[i] = list.splice(select, 1)[0];
}

// boardItemEl.textContent = e.target.textContent;
let arr = new Array();
let index = 0;

document.querySelector('.select-section').addEventListener('click', (e) => {
  arr.push(e.target.textContent);
  console.log(arr);
  //forEach
  document.querySelector('.list1').textContent = arr[0];
  document.querySelector('.list2').textContent = arr[1];
  document.querySelector('.list3').textContent = arr[2];
  while (arr.length > 3) {
    alert('숫자는 3개만 입력가능합니다.');
    arr.pop();
    console.log(arr);
  }
});

document.querySelector('.reset').addEventListener('click', (e) => {
  document.querySelector('.list1').textContent = 0;
  document.querySelector('.list2').textContent = 0;
  document.querySelector('.list3').textContent = 0;
  document.querySelector('.scoreLi1').textContent = 0;
  document.querySelector('.scoreLi2').textContent = 0;
  document.querySelector('.scoreLi3').textContent = 0;
  document.querySelector('.outLi1').textContent = 0;
  document.querySelector('.outLi2').textContent = 0;
  document.querySelector('.outLi3').textContent = 0;
});

document.querySelector('.pitch').addEventListener('click', (e) => {
  document.querySelector('.scoreLi1').textContent = arr[0];
  document.querySelector('.scoreLi2').textContent = arr[1];
  document.querySelector('.scoreLi3').textContent = arr[2];

  document.querySelector('.outLi1').textContent = arr[0];
  document.querySelector('.outLi2').textContent = arr[1];
  document.querySelector('.outLi3').textContent = arr[2];
  let count = 0;
  let strike = 0;
  let ball = 0;
  // let input1 = document.querySelectorAll('.mystyle')[0].textContent;
  // let input2 = document.querySelectorAll('.mystyle')[1].textContent;
  // let input3 = document.querySelectorAll('.mystyle')[2].textContent;
  // console.log(input1)
  // console.log(input2)
  // console.log(input3)
  // while (count < 10) {
  // 숫자를 입력받고 비교를 준비하는 부분
  // let input =
  // let inputArray = input.split(""); //input.split(''); // split함수는 아래에 설명

  strike = 0; // strike와 ball의 개수를 초기화
  ball = 0;
  count++; // 시도 횟수는 하나 증가
  // 입력받은 숫자를 비교분석하는 부분
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (number[j] == inputArray[k]) {
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }
  // 결과를 표시하는 부분 console객체는 밑에 설명
  // if (strike === 3) {
  //   console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
  //   // break;
  // } else if (count >= 10) {
  //   console.error('시도 횟수를 초과하셨습니다.');
  // } else {
  //   console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
  //   // document.querySelectorAll('.mystyle')[0].textContent = ''
  //   // document.querySelectorAll('.mystyle')[1].textContent = ''
  //   // document.querySelectorAll('.mystyle')[2].textContent = ''
  //   // inputArray = []
  //   // inputArray.push('zz')
  //   // console.log(inputArray)
  // }

  // }
});


