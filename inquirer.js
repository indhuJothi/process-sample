const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})

// var questions = [{
//   type : 'input',
//   name : 'name',
//   message : 'What is your name'
// }]

// inquirer.prompt(questions).then((answer)=>{
//   console.log(`Hi ${answer['name']}`)
// })