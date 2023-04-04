//find unique pair in an array
let array = [11, 22, 3, 4, 5, 6, 3, 55, 6, 11, 5, 4, 3, 2] //22,3,55,
//freq 
let ans=[]
let mp = new Map()
console.log(mp)
function uniquePair(arr) {
    for (i = 0; i < arr.length; i++) {
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i])+1)
        } else {
            mp.set(arr[i], 1)
        }
     
       
       
      mp.forEach((value,key)=>{
        
            ans.push(key)
        
      })
    }
   
return ans
}
console.log(uniquePair(array))
