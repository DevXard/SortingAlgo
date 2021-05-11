function insertionSort(arr) {

     
    // loop over the array if no need for swap increment pointer
    for (var i = 0; i < arr.length; i++) {
        // if swap occures decrement pointer
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            i -= 2;
        }
    }
    return arr
}

module.exports = insertionSort;