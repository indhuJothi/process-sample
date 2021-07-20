var arguments = process.argv
console.log(arguments)

function add(a,b)
{
    var sum= parseInt(a)+parseInt(b);
    return sum;
}
 var sample = add(arguments[2],arguments[3]);
 console.log(sample);