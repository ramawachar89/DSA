let result=true
function isPalindrome(data){
  let start=0;
  let end=data.length-1
 while(end>start) {
  if(data[start]!=data[end]){
  return false
  }
  start++
  end--
 }
 return true
}
console.log(isPalindrome("assba"))