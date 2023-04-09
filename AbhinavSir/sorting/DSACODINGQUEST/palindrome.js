functionisPalindrome(S){
    let a=S.split('').join()
    let b=S.split('').reverse().join()
     if(a==b){
         return 1
     }else{
         return 0
     }
  }
