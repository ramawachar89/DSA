//Find all duplicate string in the string


// let freq={}
// let ans=[]

// function duplicatestring(str){
   
//   for(let i=0;i<str.length;i++){
//     freq[str[i]]=(freq[str[i]] || 0 )+ 1
    
//   }
//   for(let key in freq){
//     if(freq[key]>1){
//       ans+=(key)
//     }
    
//   }
// return ans
// }
// console.log(duplicatestring("geekforgeeks"))

// let kk='hd4j5kn5n3'
// let v=kk.split("")
// console.log(v)

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