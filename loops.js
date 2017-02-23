function forLoop(array) {
  for(var i=1 ;i < 26 ;i++){
    i===1  ? array.push("I am 1 strange loop.") : array.push("I am ${i} strange loops.");

  }
  return array;
}
function whileLoop(n) {
  var counter=0;
  while(n >counter){
  console.log(counter);
  counter++ ;}
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do{array.splice(0,1);} while (array.length > 0 && maybeTrue());
  return array ;
}
doWhileLoop([1,2,6,7]);