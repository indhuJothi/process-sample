const readlineSync = require('readline-sync')

var username = readlineSync.question('what is your name?')
console.log(`Hi ${username}!`)