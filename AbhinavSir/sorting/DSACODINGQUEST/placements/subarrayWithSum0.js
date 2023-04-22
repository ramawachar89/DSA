
// function subArray(arr){
//     let pre=[];
//     pre[0]=arr[0]
//     let ans=0
//     for(let i=1; i<arr.length;i++){
//         pre[i]=pre[i-1]+arr[i]
//     }
//     let map=new Map()
//     for(let i=0;i<arr.length;i++){
//     if(pre[i]==0){
//         console.log(pre.slice(0,i+1))
//         ans++
//     }else if(map.has(pre[i])){
//         ans+=map.get(pre[i])
//     }else if(map.has(pre[i])){
//         map.set(pre[i],map.get(pre[i])+1)
//     }
    
//     else{
//         map.set(pre[i],1)
//     }
    
//      }
//      return ans
// }
// console.log(subArray([2,3,4,5,-5,6,-6]))
//brute
function subArray(arr) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum == 0) {
          console.log(arr.slice(i, j + 1));
          ans++;
        }
      }
    }
    return ans;
  }
  
  console.log(subArray([1, 2, 3, 4, 5, -5, 6, -6]));
  

// function subArray(arr){
//     let k=3
//     let pre=[]
//     pre[0]=arr[0]
//     for(let i=1;i<arr.length;i++){
//         pre[i]=pre[i-1]+arr[i]
//     }
//     let map=new Map()
//     let ans=0
//     for(let i=0;i<arr.length;i++){
//         if(pre[i]==k){
//             console.log(arr.slice(0,i+1))
//             ans++
//         }else if(map.has(pre[i])){
//             ans+=map.get(pre[i])
//         }else if(map.has(pre[i])){
//             map.set(pre[i],map.get(pre[i])+1)
//         }else{
//             map.set(pre[i],1)
//         }
//     }
// return ans
// }
// console.log(subArray([1,2, 3, 4, 5, -5, 6, -6]));
