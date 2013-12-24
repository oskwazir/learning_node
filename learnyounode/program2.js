var i = 2,
   length = process.argv.length,
   sum=0;

for(;i<length;i++){
	sum += Number(process.argv[i]);
}

console.log(sum);
