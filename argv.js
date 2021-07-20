const args = require('minimist')(process.argv.slice(2))
console.log(args);
console.log(args['lastname'])// node argv.js --name Indhu --lastname Palanivel