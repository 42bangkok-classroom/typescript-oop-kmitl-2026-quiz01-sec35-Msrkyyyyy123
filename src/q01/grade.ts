const input = ProcessingInstruction.arguments[2];
const point = Number(input);

if (Number.isNaN(point)){
  console.log("invalid number")
} 
else if (point < 0 || point > 100){
  console.log("invalid number")
} 

else {
if (point >= 80) {
  console.log("A")
} else if (point >= 70) {
  console.log("B")
} else if (point >= 60) {
  console.log("C")
} else if (point >= 50) {
  console.log("D")
} else {
  console.log("F")
}
}