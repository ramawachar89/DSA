//Find all duplicate string in the string


let freq={}
let ans=[]

function duplicatestring(str){
   
  for(let i=0;i<str.length;i++){
    freq[str[i]]=(freq[str[i]] || 0 )+ 1
    
  }
  for(let key in freq){
    if(freq[key]>1){
      ans+=(key)
    }
    
  }
return ans
}
console.log(duplicatestring("geekforgeeks"))