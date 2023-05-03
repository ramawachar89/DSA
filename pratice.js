

function isAnagram(str1,str2){
   let freq1={}
   let freq2={}
   for(let i=0; i<str1.length;i++){
    freq1[str1[i]]=(freq1[str1[i]]||0)+1
    console.log(freq1)
   } 
   for(let i=0; i<str2.length;i++){
    freq2[str2[i]]=freq2[str2[i]]||0+1
   }
   for(let key in freq1){
    console.log(key)
    if(!freq2[key]){
        return false
    }else if(freq2[key]!=freq1[key]){
        return false
    }
    for(let key in freq2){
        if(!freq1[key]){
            return false
        }else if(freq1[key]!=freq2[key]){
            return false
        }

            
    }
   return true
   }

}
console.log(isAnagram("kjkk"))