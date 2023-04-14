//maximum subarray sum

function subArray(arr){
    let sum=0;
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        max=Math.max(max,sum)
        if(sum<0){
            sum=0
        }
    }
    return max
}
console.log(subArray([-2,1,-3,4,-1,2,1,-5,4]))