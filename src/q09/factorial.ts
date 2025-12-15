  const input = +ProcessingInstruction.arguments[2];
  if (Number.isNaN(input) || !Number.isInteger(input) || input < 0){
    process.exit(0);
  }

  let result: number = 1;
  for (let i = input; i > 0; i--){
    result *= i;
  }
  console.log(result);
