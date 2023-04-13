function sort(arr){
  let i=0
  let l=0
  let r=arr.length-1;
 while(i<=r){
    if(arr[i]==3){
        let temp=arr[i]
        arr[i]=arr[r]
        arr[r]=temp
        r--
    } else if(arr[i]==0){
        let temp=arr[i]
        arr[i]=arr[l]
        arr[l]=temp
        i++
        l++
    }else{
        i++
    }
   
 }

  
  return arr
}
let arr=[0,1,2,2,1,1,3,2,2,1,2,2]
console.log(sort(arr))