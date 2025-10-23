const btn = document.querySelector("#btn");
let str1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let nEl;
let resultStr = "";
let startTime;
//функции рандома
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// сколько  элементов 
function randText() {
  for (let i = 0; i < 5; i++) {
    nEl = getRandomInt(str1.length - 1);
    console.log(nEl);
    resultStr += str1[nEl];
  }
}

function time() {

}
function Name() {
  // логика печати 
  startTime = new Date();
  randText();
  while (true) {
    let str = prompt(`Введите ${resultStr}`);
    if (str === resultStr) {
      alert(`Вы выиграли! Время: ${startTime.getSeconds()} `);
      resultStr = '';
      randText();
    } else if (str == 0) {
      resultStr = '';
      break;
    } else {
      alert("ВСЁ ФИГНЯ ДАВАЙ ПО НОВОЙ");
    }
  }
}

btn.addEventListener("click", Name);