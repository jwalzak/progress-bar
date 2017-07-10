let progressBar = [];
const bar = 3;
for (let i = 0; i < bar; i++) {
  progressBar[i] = Math.floor((Math.random() * 10000) + 1);
}

console.log(progressBar);

let sorted = [];

let sortArray = function(arr){
  let biggest = 0;
  for(let i = 0; i < progressBar.length-1; i++) {
    if(progressBar[i] > progressBar[i + 1]) {
      let temp = progressBar[i];
      progressBar[i] = progressBar[i + 1];
      progressBar[i + 1] = temp;
    }
  }
  console.log(progressBar);
}

sortArray(progressBar);

