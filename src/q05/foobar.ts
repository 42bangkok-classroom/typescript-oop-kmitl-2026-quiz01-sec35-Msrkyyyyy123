const input4 = +ProcessingInstruction.arguments[2];
if (Number.isNaN(input4) || input4 <= 0){
    Process.exit(1);
}

for (let i = 1; i <= input4; i++){
    if (i % 3 === 0 && i % 7 === 0){
        console.log("foobar");
    }
    else if (i % 7 === 0){
        console.log("bar");
    }
    else if (i % 3 === 0){
        console.log("foo");
    }
    else{
        console.log(i)
    }
}