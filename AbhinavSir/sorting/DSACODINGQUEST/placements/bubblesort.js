let arr=[2,4,3,6,7,8,4,3]
function buubleSort(arr){
for(let i=arr.length;i>0;i--){
for(let j=0;j<i-1;j++){
    if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    }
}
}
return arr
}
console.log(buubleSort(arr))