const btn = document.querySelector("#btn");
let arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
let arr2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let arr3 = ["z", "x", "c", "v", "b", "n", "m"];
let array = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
let pystoe;
let result = "";
let a;
// функция рандома
function getRandomInt(random) {
  return Math.round(Math.random() * random);
}
// функция выбора строки
function stroka() {
  a = +prompt("Какую строку хотите написать ?")
  if (a == 1) {
    a = arr;
    result = "";
  } else if (a == 2) {
    a = arr2
    result = "";
  }
  else if (a == 3) {
    a = arr3
    result = "";
  }
  else if (a == 4) {
    a = array
    result = "";
  }
}
// функция рандома символов
function text() {
  let hislo = +prompt("введите количество символов")
  for (let i = 0; i < hislo; i++) {
    pystoe = getRandomInt(a.length - 1);
    console.log(pystoe);
    result += a[pystoe];
  }
}
// начало работы всей печати
function Start() {
  stroka();
  text();
  let player = +prompt("Введите число попыток")
  while (true) {
    let primi = prompt(`Введите: ${result}`);
    if (primi === result) {
      alert("Вы выиграли!");
      result = "";
      text();
    }
    else {
      player--
      alert("ВСЁ ФИГНЯ ДАВАЙ ПО НОВОЙ, осталось попаток: " + player);
      if (player == 0) {
        break
      }
    }
  }
}
// кнопка
btn.addEventListener("click", Start);
