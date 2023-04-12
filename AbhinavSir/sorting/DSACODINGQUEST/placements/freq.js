function commonElements(arr1, arr2, arr3, n1, n2,n3){
    let freq1={}
       let freq2={}
       let freq3={}
       let freq4={}
       let ans3=[]
        ans=[]
       let ans2=[]
       ans2.sort(function(a,b){return a-b})
       for(let i=0;i<arr1.length;i++){
           freq1[arr1[i]]=(freq1[arr1[i]] || 0)+1
       }
       for(let i=0;i<arr2.length;i++){
           freq2[arr2[i]]=freq2[arr2[i]]||0+1
       }
       for(let i=0;i<arr3.length;i++){
           freq3[arr3[i]]=freq3[arr3[i]]||0+1
       }
       for(let key in freq1){
           ans.push(key)
       }
       for(let key in freq2){
          ans.push(key)
       }
       for(let key in freq3){
        ans.push(key)
       }
        for(let i=0;i<ans.length;i++){
           freq4[ans[i]]=(freq4[ans[i]]||0)+1
       }
       for(let key in freq4){
           if(freq4[key]==3){
               ans2.push(key)
           }
           
       }
     ans2.sort(function(a,b){return a-b})
      
       console.log(ans2)
 }
 commonElements([1, 5, 10, 20, 40, 80],[6, 7,8, 20, 80, 100],[3, 4, 8,15, 20, 30, 70, 80, 120])
//  commonElements([3,3,3],[3,3,3],[3,3,3])