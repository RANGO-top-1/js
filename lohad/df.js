let strokaMasiv = []
let tohki =[]
const stroka = +prompt('введите длину строки')
for(let i = 1;i<stroka+1;i++){
    let hisla = +prompt('введите точку')
strokaMasiv.push(hisla)
    console.log(hisla);
}
for (let i = strokaMasiv.length -1; i >= 0; i--){
    tohki.push(strokaMasiv[i])
}
console.log(tohki)