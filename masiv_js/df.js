let array = [9, 5, 97, 9, 2, -6, 4, -5, 68, 68, 1];

let start = 0;
let end = 0;

let arrayMin = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < arrayMin) {
        start = i;
        arrayMin = array[i];
    }
}

let arrayMax = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > arrayMax) {
        end = i;
        arrayMax = array[i];
    }
}

if (start > end ){
    let c = start;
    start= end;
    end = c;
}

let sum = 0;
for (let i = start+1; i < end; i++) {
    sum += array[i]
}
console.log(arrayMin, arrayMax, array, sum)

