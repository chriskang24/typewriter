const sentence = "hello there from lighthouse labs";

let timeDelay = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); 
  }, timeDelay)

  timeDelay += 100;
}

whenToTimeOut = sentence.length * 125

setTimeout(() => {
  console.log();
}, whenToTimeOut)


// for (const char of sentence) {

//   setTimeout(() => {
//   process.stdout.write(char);

//   }, 1000)

// };
