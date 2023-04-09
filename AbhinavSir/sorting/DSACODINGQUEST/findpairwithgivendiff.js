function findPair(arr, size, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;

    // Search for a pair
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            return true;
        }
        else if (arr[j] - arr[i] < n)
            j++;
        else
            i++;
    }

    
    return false;
}

// Driver program to test above function

let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
findPair(arr, size, n);