let arr=[-25,-3,-78,4,58,-14,6,7]

//kadane algorithum
let max_sum=-Infinity;
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  
    if(sum>max_sum){
        max_sum=sum
    }
    if(sum<0){
        sum=0
    }
    max_sum=Math.max(max_sum,sum)
}
console.log(max_sum)