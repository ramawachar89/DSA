let nums = [0,1,2,2,3,0,4,2]
let val = 2

function remove(num, val){
    let n = num.length
   let j=0;
    for(let i=0;i<n;i++){
        if(num[i] !==val) 
        {num[j]= num[i]
        j++}
       
    } num.length=j
   return num

}
console.log(remove(nums,val));