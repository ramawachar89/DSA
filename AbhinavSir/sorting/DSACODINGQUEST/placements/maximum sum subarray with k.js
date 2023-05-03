// function maxSumSubarray(arr, k) {
//     let windowSum = 0;
//     let maxSum = 0;
  
//     // Create the initial sliding window
//     for (let i = 0; i < k; i++) {
//       windowSum += arr[i];
//     }
  
//     // Slide the window one element at a time
//     for (let i = k; i < arr.length; i++) {
//       windowSum += arr[i] - arr[i - k];
//       maxSum = Math.max(maxSum, windowSum);
//     }
  
//     return maxSum;
//   }
// console.log(maxSumSubarray([1,2,3,4,3,4],3))  
let arr=[1,2,5,4,3,2,4,5]
var searchRange = function(arr, x) {
    let left=0;
    let n=arr.length
    let right=n-1;
    let ans=[-1,-1]
    while(left<=n-1 && right>=0){
        if(arr[left]==x && ans[0]==-1){
            ans[0]=left
        }
        if(arr[right]==x && ans[1]==-1){
            ans[1]=right
        }
    }
    return ans
}
console.log(searchRange(arr,5))