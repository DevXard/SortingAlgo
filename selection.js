function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        // create a variable to hold the first element
        // in the current element
        
        let min  = i
        for (var j = i + 1; j < arr.length; j++) {
            //check if any element is smaller the the current min
            //and swap if it is
            if(arr[min] > arr[j]){
                min = j
            }
        }

        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }

    }
    return arr;
}

module.exports = selectionSort;