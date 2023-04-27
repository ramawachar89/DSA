let arr=[1,2,3,4]
var subarraySum = function(arr, k) {
    let map=new Map()
    let count=0
    let sum=0;
    map.set(0,1)
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(map.has(sum-k)) count+=map.get(sum-k)
       
        else map.set(sum,1)
    }
    return count
};
console.log(subarraySum(arr))