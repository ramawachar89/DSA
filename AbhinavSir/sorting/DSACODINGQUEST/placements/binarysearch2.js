let arr=[1,3,7,9,12,17,22,30,45]
let x=30
function cc(arr){
let l=0
let r=arr.length-1

let ans=-1

while(l<=r){
    let mid=Math.floor(((l+r)/2))

    if(x==arr[mid]){
        ans=mid
        break
    }
    else if(x>arr[mid]){//right
        l=mid+1
    }
    else{//left
        r=mid-1
    }
}
console.log(ans)
}
console.log(cc(arr))