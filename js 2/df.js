    "use strict";

let x = +prompt (("Введите x "));
let y = +prompt (("Введите y "));
let a = +prompt (("Введите a "));
let b = +prompt (("Введите b "));
let z;

if(x > 0 && y > 0) {
    let maxEl = a/x;
    if (maxEl < b/x) {
        maxEl = b/x
    }
    if (maxEl < Math.sqrt(y)){
        maxEl = Math.sqrt(y);
    }
    z = maxEl;
} else if(x < 0 && y > 0){
    let minEl = Math.pow(a*x,3)
    if (minEl >  Math.pow(b*y,2)){
        minEl = Math.pow(b*y,2);
    }
    z = minEl;
} else {
    z = Math.pow(2,x+y);
}

console.log (z);