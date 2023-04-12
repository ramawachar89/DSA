let array=[1,5,7,-1]//-1,1,5,7
array.sort(function(a,b){return a-b})

let k=6;
let ans=[]
function countPair(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]==k){
             ans.push([arr[i],arr[j]])
          i++;
          j--;
        }else if(arr[i]+arr[j]>k){
            j--
        }else{
            i++
        }
    }
    return ans
}
console.log(countPair(array))