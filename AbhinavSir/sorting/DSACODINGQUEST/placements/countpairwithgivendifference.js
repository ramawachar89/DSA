let arr=[5,3,20,2,50,80]//2,3,5,20,50,80
arr.sort(function(a,b){return a-b})
function countdiff(arr){
    let i=0;
    let j=i+1
    while(i<j){
    if(arr[j]-arr[i]==78){
        return [arr[i],arr[j]]
    }if(arr[j]-arr[i]<78){
        j++
    }else{
        i++
    }
    }
}
console.log(countdiff(arr))