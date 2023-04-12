let strs = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
function groupAnagram(str){
  let obj={};
  // let arr=[];
  for(let i=0;i<str.length;i++){
   let sorted=str[i].split("").sort().join("");
     if(obj[sorted]){
      obj[sorted]=[...obj[sorted],arr[i]]
    }else{
      obj[sorted]=[].push()
    }
  }
  console.log(Object.values(obj))
  }
  
groupAnagram(strs)