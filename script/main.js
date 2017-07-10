let progressBar = [];
let bar = 3;
for (let i = 0; i < bar; i++){
  progressBar[i] = Math.floor((Math.random() * 10000) + 1);
}

console.log(progressBar[0], progressBar[1], progressBar[2]);
