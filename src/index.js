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

let arr = [];

let newArr = arr.slice();

document.querySelector('.select-section').addEventListener('click', (e) => {
  e.preventDefault();
  newArr.push(e.target.textContent);
  //forEach
  document.querySelector('.list1').textContent = newArr[0];
  document.querySelector('.list2').textContent = newArr[1];
  document.querySelector('.list3').textContent = newArr[2];
  while (newArr.length > 3) {
    alert('숫자는 3개만 입력가능합니다.');
    newArr.pop();
  }
  console.log(newArr);

  // if (newArr[0] === newArr[1] && newArr[1] === newArr[2]) {
  //   alert('다른숫자를 입력하세요');
  //   newArr.pop();
  //   document.querySelector('.list1').textContent = newArr[0];
  //   document.querySelector('.list2').textContent = newArr[1];
  //   document.querySelector('.list3').textContent = newArr[2];
  // }
});

const viewReset = () => {
  document.querySelectorAll('.viewLi').forEach((viewli) => {
    viewli.textContent = 0;
  });
};

//스코어판에 선택한 숫자가 보이는 함수
const scoreAdd = () => {
  document.querySelectorAll('.scoreLi').forEach((scoreli, index) => {
    scoreli.textContent = newArr[index];
  });
  document.querySelectorAll('.outLi').forEach((outli, index) => {
    outli.textContent = newArr[index];
  });
  // newArr = [];
};

//스코어판에 횟수가 쌓이는 함수
const value = () => {
  const div = document.createElement('div');
  div.classList.add('open');
  div.classList.add('score');
  div.innerHTML = document.querySelector('.score').innerHTML;
  document.querySelector('.score-bg').appendChild(div);
  console.log(div);
};

document.querySelector('.reset').addEventListener('click', (e) => {
  newArr = [];
  document.querySelector('.score').parentNode.removeChild(document.querySelector('.score'));
  document.querySelector('.score').classList.remove('open');
  // console.log(document.querySelector('.score-bg').innerHTML);
});

document.querySelector('.pitch').addEventListener('click', (e) => {
  console.log(newArr);
  console.log(arr);

  viewReset(); //선택한 숫자가 0으로 바뀌는 함수
  scoreAdd(); //전광판에 숫자가 보였다가 리셋하는 함수
  document.querySelectorAll('.scoreLi').forEach((scoreli, index) => {
    scoreli.textContent = newArr[index];
  });
  value(); // 스코어판에 횟수가 쌓이는 함수
  console.log(newArr);
  newArr.splice(0, 3);
  console.log(newArr);
  // document.querySelector('.scoreLi1').textContent = arr[0];
  // document.querySelector('.scoreLi2').textContent = arr[1];
  // document.querySelector('.scoreLi3').textContent = arr[2];
  // document.querySelector('.outLi1').textContent = arr[0];
  // document.querySelector('.outLi2').textContent = arr[1];
  // document.querySelector('.outLi3').textContent = arr[2];
  let count = 0;
  let strike = 0;
  let ball = 0;

  // while (count < 10) {
  // 숫자를 입력받고 비교를 준비하는 부분
  // let input = newArr;
  // let inputArray = newArr.split('');
  // let inputArray = input.split(""); //input.split(''); // split함수는 아래에 설명

  strike = 0; // strike와 ball의 개수를 초기화
  ball = 0;
  count++; // 시도 횟수는 하나 증가
  // 입력받은 숫자를 비교분석하는 부분
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (number[j] == newArr[k]) {
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }
  // 결과를 표시하는 부분 console객체는 밑에 설명
  if (strike === 3) {
    console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
    // break;
  } else if (count >= 10) {
    console.error('시도 횟수를 초과하셨습니다.');
  } else {
    console.info(newArr + ': ' + strike + '스트라이크 ' + ball + '볼');
    //   // document.querySelectorAll('.mystyle')[0].textContent = ''
    //   // document.querySelectorAll('.mystyle')[1].textContent = ''
    //   // document.querySelectorAll('.mystyle')[2].textContent = ''
    //   // inputArray = []
    //   // inputArray.push('zz')
    //   // console.log(inputArray)
    // }
  }
});
