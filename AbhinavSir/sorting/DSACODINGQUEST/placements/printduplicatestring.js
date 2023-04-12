function printDuplicate(arr) {
    let mp = new Map()
    let ans;
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]
        if (mp.has(x)) {//already present
            mp.set(x, mp.get(x) + 1)
        }
        else {//not present
            mp.set(x, 1);
        }

    }
    mp.forEach((value,key)=>{
      if(value>1){
        return key
      }
        })
}
console.log(printDuplicate("geekforgeeks"))