//First and last occurrences of x  (2method)
// function find(arr,x){
//     let start=0;
//        let end=arr.length-1;
//        let ans=0;
//        while(start<=end){
//            let mid=Math.floor(((start+end)/2))
//            if(arr[mid]==x){
//                end=mid-1
//                ans=mid
//                break
//            }else if(x>arr[mid]){
//                start=mid+1
//            }else{
//                end=mid-1
//            }
//        }
//     return ans
//    }
//    console.log(find([ 1, 3, 5, 5, 5, 5, 67, 123, 125],5))

function find(arr,x){
    let left=0
    let right=arr.length-1;
    let ans=[-1,-1];
    while(left<=arr.length-1 && right>=0){
        if(arr[left]==x && ans[0]==-1){
            ans[0]=left
        }
        if(arr[right]==x && ans[1]==-1){
            ans[1]=right
        }
        left++
        right--
    }
    return ans
}
console.log(find([ 1, 3, 5, 5, 5, 5, 67, 123, 125],5))
  
    