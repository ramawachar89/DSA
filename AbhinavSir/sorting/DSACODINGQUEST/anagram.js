function isAnagram(a, b)
    
    {
          var freq1={}
         var freq2={}
         if(a.length!=b.length)return false
       for(let i=0;i<a.length;i++){
           freq1[a[i]]=(freq1[a[i]] ||0)+1
       } 
       for(let i=0;i<b.length;i++){
           freq2[b[i]]=(freq2[b[i]] ||0)+1
       } 
       for(let key in freq1){
           if(!freq2[key]){
               return false
           }else if(freq1[key]!=freq2[key]){
               return false
           }
       }
        for(let key in freq2){
           if(!freq1[key]){
               return false
           }else if(freq2[key]!=freq1[key]){
               return false
           }else{
               return true
           }
       }
       
    }
    console.log(isAnagram("abc","bca"))
   
