let arr=[3,4,2,5,88,6,9]
function partition(arr,l,r){
    let =arr.length-1
let pivot=arr[r]
console.log(pivot)
let l=0
let left=l
    for(let i=l;i<r;i++){
      if(arr[i]<pivot){
      let temp=arr[i]
      arr[i]=arr[left]
      arr[left]=temp
      left++
      }
    }
    let temp=arr[r]
    arr[r]=arr[left]
    arr[left]=temp
    return left
}
function quicksort(arr,high,low){
    if(low>=high){
        return
    }
    let pi=partition(arr,low,high)
    quicksort(arr,low,pi-1)
    quicksort(arr,pi+1,high)
}
quicksort(arr,l,r)
console.log(arr)