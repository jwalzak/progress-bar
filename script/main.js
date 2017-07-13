let progressBar = [];
const bar = 10;
for (let i = 0; i < bar; i++) {
  progressBar[i] = Math.floor((Math.random() * 10000) + 1);
}

console.log(progressBar);

let sorted = [];

let sortArray = function(arr){
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  console.log(arr);
  sorted = arr;
}

sortArray(progressBar);
sorted = sorted.reverse();
console.log(sorted);

//Calculate the % of each element in the array compared against the largest number array[0];
let percentArray = [];
function calcPerc(arr) {
  let max = 100;
  let bigVal = arr[0]; //The largest value in the array
  for(let i = 0; i < arr.length; i++) {
    percentArray[i] = (arr[i] / bigVal) * max;
  }
  console.log(percentArray);
  // return(precentArray);
}
