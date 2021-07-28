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

  console.log('After slice');
 const args = (process.argv.slice(2))
console.log(args)

function sub(a,b){
    var sub= parseInt(a)-parseInt(b)
    return sub
}

const subRes = sub(args[1],args[0])
console.log(subRes)
//node argv.js 2 3 Indhu Hello