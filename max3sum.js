let array=[64,7,8,9,55,5,44,3]
let k=3;
let max=0
function max_Sum(arr){
  let current_sum=arr[0]+arr[1]+arr[2]
  for(let i=3;i<arr.length;i++){
    current_sum+=arr[i]
    current_sum-=arr[i-3]
  }
}
console.log(max_Sum(array))