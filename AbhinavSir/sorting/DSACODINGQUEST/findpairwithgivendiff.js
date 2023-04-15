//find Pair with difference
let array=[2,3,4,5,6,7,8,9,11]
let k=4
let i=0;
   let j=array.length-1;
function pairDifference(arr){
   let count=0;
   while(i<j){
      if(arr[j]-arr[i]==k){
         count++
         i++;
        
      } else if(arr[j]-arr[i]>k){
         j--;
      } else {
         i++;
      }
   }
   console.log(count);
}

console.log(pairDifference(array))

