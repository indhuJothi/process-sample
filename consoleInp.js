const readline = require('readline')
const getName = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

getName.question('What is your name?',(name)=>{
  console.log(`Hello ${name}!`)
  getName.close();
})