function rotate(arr){
    let x=arr[arr.length-1]
    for(let i=arr.length-2;i>=0;i--){
        arr[i+1]=arr[i]
    }
    arr[0]=x
    return arr
}
console.log(rotate([1,2,3,4,5]))