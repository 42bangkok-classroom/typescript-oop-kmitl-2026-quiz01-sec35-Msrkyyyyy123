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
  console.log("grade is A")
} else if (point >= 70) {
  console.log("grade is B")
} else if (point >= 60) {
  console.log("grade is C")
} else if (point >= 50) {
  console.log("grade is D")
} else {
  console.log("grade is F")
}
}