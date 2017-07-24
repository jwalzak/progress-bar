let progressBar = [];
const bar = 30; // How many bars will show on the screen
for (let i = 0; i < bar; i++) {
  progressBar[i] = Math.floor((Math.random() * 10000) + 1);
}

function hexColour() {
  const hexDigit = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  const hexColourNum = 6;// Length of HTML hex colour
  let output = '#';
  for(let i = 0; i<hexColourNum; i++){
    let randNum = Math.floor((Math.random() * hexDigit.length));
    output += hexDigit[randNum];
  }// End for
  // console.log(`Hex output is ${output}`);
  return output;
}// hexColour

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

let percentArray = [];

//Calculate the % of each element in the array compared against the largest number array[0];
function calcPerc(arr) {
  let max = 100;
  let bigVal = arr[0]; //The largest value in the array
  for(let i = 0; i < arr.length; i++) {
    percentArray[i] = Math.floor((arr[i] / bigVal) * max);
  }
  console.log(percentArray);
}

calcPerc(sorted);

function placeElement(arr) {
  for(let i = 0; i < arr.length; i++) {
    let color = hexColour();
    let el = document.createElement('div');
    let t = document.createTextNode(arr[i] + '%');
    el.setAttribute('class', 'bar');
    el.style.background = color;
    el.style.width = arr[i] + '%';
    el.style.height = '50px';
    el.style.textAlign = 'center';
    el.appendChild(t);
    let divEl = document.querySelector('.progress--bar');
    divEl.appendChild(el);
  }
}

placeElement(percentArray);
