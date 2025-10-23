let a = [2, 26, 1, 6, 5, 10, 11, 9, 27, 28, 29];
let primi = a[0];
let result = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] < primi) {
        continue;
    } else (a[i] > primi)
    primi = a[i]
    result [i]= primi 
}

console.log(result)