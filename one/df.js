let arr = [2, 4,-2, 8, 95, 100,-19];
let maxEl = arr[0];
let minEl = arr[0];
// находит мах элемент 
for (let i = 0; i < arr.length; i++) {
    if(maxEl > arr[i]){
        continue;
    }else (maxEl < arr[i])
    maxEl = arr[i]
}
// находит мин элемент
for (let i = 0; i < arr.length; i++) {
    if(minEl < arr[i]){
        continue;
    }else (minEl > arr[i])
    minEl = arr[i]
}
//меняет местами мах и мин между собой
console.log(arr, maxEl, minEl)




