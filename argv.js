var arguments = process.argv
 console.log('Before using slice');
 console.log(arguments);
function add(a,b)
{
    var sum= parseInt(a)+parseInt(b);
    return sum;
}
 var sample = add(arguments[2],arguments[3]);
 console.log(sample);
 process.argv.forEach((val,index) => {  //why Index comes as second argument here
    console.log(`${index}: ${val}`)
  })
 const args = (process.argv.slice(2))
 console.log('After slice');
console.log(args)
//node argv.js 2 3 Indhu Hello