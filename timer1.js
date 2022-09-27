const timer = function(arr) {
  for(let number of arr) {
    if (isNaN(number) || number < 0) {
      continue;
    }

    setTimeout(() => process.stdout.write('\x07'), number * 1000);
  }
}


const args = process.argv.slice(2);
const numberInput = args.map((arg) => parseInt(arg));
timer(numberInput);