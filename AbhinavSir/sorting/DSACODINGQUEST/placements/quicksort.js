let arr=[8,3,6,5,4,1,3]

function partition(arr,l,r){
    let pivot=arr[r]

    let left=l

    for(let i=l;i<r;i++){
        if(arr[i]<pivot){
            //swap with left
            let temp=arr[i]
            arr[i]=arr[left]
            arr[left]=temp
            left++;
        }
    }
    let temp=arr[r]
    arr[r]=arr[left]
    arr[left]=temp
    return left
}

  
function quickSort(arr, low, high) {
    if(low>=high){
        return
    }
    let pi=partition(arr,low,high)

    quickSort(arr,low,pi-1)
    quickSort(arr,pi+1,high)
}

quickSort(arr,1,5)//O(NlogN)
console.log(arr)

// let a=[1,2,3,4]
// let b=[4,5,6,7]
// let n=a.length;
// let m=b.length;
// let c=new Array(m+n)
// let i=0,j=0,k=0;
// while(i<n&&j<m){
//     if(a[i]<b[j]){
//         c[k]=a[i]
//         i++
//         k++
//     }else{
//         c[k]=b[j]
//         k++;
//         j++
//     }
// }
// while(i<n){
   
//         c[k]=a[i]
//         i++
//         k++
// }

// while(j<m){
   
//         c[k]=b[j]
//         k++
//        j++
// }

// console.log(c)

