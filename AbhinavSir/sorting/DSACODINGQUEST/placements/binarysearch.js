let arr=[1,2,6,7,9,8,22,,44,77]
let x=7;

function binarySearch(arr){
    let start=0;
    let end=arr.length-1;
    let ans=0;
    while(start<=end){
        let mid=Math.floor(((start+end)/2))
        if(arr[mid]==x){
            ans=mid
            break
        }else if(x>arr[mid]){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    console.log(ans)
}
   console.log(binarySearch(arr))

