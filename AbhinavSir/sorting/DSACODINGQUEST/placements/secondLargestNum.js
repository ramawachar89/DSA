let largest=-1
let sec=-1
function secondzlargest(arr){
 for(let i=0;i<arr.length;i++){
    if(largest<arr[i]){
        sec=largest
        largest=arr[i]
 }else if(sec<arr[i] && largest!==arr[i]){
    sec=arr[i]
 }
 }
 return sec
}
console.log(secondzlargest([3,2,1,2,4,5]))