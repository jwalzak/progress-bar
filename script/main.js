let progressBar = new Array(5);

// Uses .fill to put data in empty array so it will be iterable
// .map used to put a random number in each element of the array.
progressBar = progressBar.fill(3).map(newBar => Math.floor((Math.random() * 10000) + 1));
console.log(progressBar);

const hexColour = () => {
  const hexDigit = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  const hexColourNum = 6;// Length of HTML hex colour
  let output = '#';
  for(let i = 0; i<hexColourNum; i++){
    let randNum = Math.floor((Math.random() * hexDigit.length));// .length used to match the array
    output += hexDigit[randNum];
  }// End for
  return output;
}// hexColour

let sorted = [];

const sortArray = arr => {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }// End if
    }// End for
  } while(swapped); // End do
  sorted = arr;
}// End sortArray

sortArray(progressBar);
sorted = sorted.reverse();

let percentArray = [];

//Calculate the % of each element in the array compared against the largest number array[0];
const calcPerc = arr => {
  let max = 100;
  let bigVal = arr[0]; //The largest value in the array
  for(let i = 0; i < arr.length; i++) {
    percentArray[i] = Math.floor((arr[i] / bigVal) * max);
  }// End for
}// End calcPerc

calcPerc(sorted);

const placeElement = percentArray.map(percent => {
  let color = hexColour();
  let el = document.createElement('div');
  let t = document.createTextNode(percent + '%');
  el.setAttribute('class', 'bar');
  el.style.background = color;
  el.style.width = percent + '%';
  el.style.height = '50px';
  el.style.textAlign = 'center';
  el.appendChild(t);
  let divEl = document.querySelector('.progress--bar');
  divEl.appendChild(el);
});
