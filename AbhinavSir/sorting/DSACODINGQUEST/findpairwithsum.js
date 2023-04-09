function getPairsCount(arr,n,k){
    let i=0;
    let j=n-1;
    var ans=0
      while(i<j){
      if(arr[i]+arr[j]==k){
       ans+=0
      }
      if(arr[i]+arr[j]>k){
          j--
      }
      if(arr[i]+arr[j]<k){
          i++
      }
    }
return ans
  }

