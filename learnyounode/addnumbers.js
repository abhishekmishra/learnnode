
var argv = process.argv;
var len = process.argv.length;
var i, sum = 0;

if(len > 2) 
{
    for(i = 2; i < len; i++) {
        //console.log(sum);
        //console.log(argv[i]);
        sum += Number(argv[i]);
    }
}

console.log(sum);