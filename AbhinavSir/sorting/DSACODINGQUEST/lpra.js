// let arr=[23,5,6,7,5,4,3]
// let x=5
// let left=0
// let right=arr.length-1;
// let ans=[-1,-1]
// function findnum(arr){ 
//   while(left<=arr.length&&right>0){
//     if(arr[left]==x&&ans[0]==-1){
//         ans[0]=left
//     }
//     if(arr[right]==x && ans[1]==[-1]){
//         ans[1]=right
//     }
//     left++;
//     right--
//   }
// //   return ans
// // }
// // console.log(findnum(arr));
// let arr=[1,2,3,4,-4,5,-2]
// function sub(arr){
// let pre=[]
// pre[0]=arr[0]
// for(let i=1;i<arr.length;i++){
//     pre[i]=pre[i-1]+arr[i]
// }
// const map=new Map()
// let ans=0
// for(let i=0;i<arr.length;i++){
//     if(pre[i]==0){
//         ans++
//     }else if(map.has(pre[i])){
//         ans+=map.get(pre[i])
//     }else if(map.has(pre[i])){
//         map.set(pre[i],map.get(pre[i])+1)
//     }else{
//         map.set(pre[i],1)
//     }
// }
// return ans
// }
// // console.log(sub(arr))

// let arr=[23,5,6,7,5,4,3]

// let max=0;
// let curren=0
// function maxim(arr){
//     for(let i=0;i<arr.length;i++){
//         curren+=arr[i]
//         max=Math.max(curren,max)
//         if(curren<0){
//             curren=0
//         }
//     }
//    return max
// }
// console.log(maxim(arr))

let arr=[3,4,676,5,6]

let max=-Infinity
let min=Infinity
let secl=0

function sum(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secl=max
            max=arr[i]
        }else if(secl<arr[i] && max!==arr[i]){
            secl=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return secl
}
console.log(sum(arr))