let array= [10, 20, 35, 50, 75, 80]

let i=0;
let j=array.length-1;
let k=70
let ans=[]
function largest(arr){
    while(i<j){
        if(arr[i]+arr[j]==k){
            return [arr[i],arr[j]]
        }else if(arr[i]+arr[j]>k){
            
            j--

        }else if(arr[i]+arr[j]<k){
            i++
        }
    }
   
    
}
console.log(largest(array));