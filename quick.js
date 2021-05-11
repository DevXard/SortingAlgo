/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length){

    function swapArr(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    let piv = arr[start];
    let swap = start;

    for(let i=start + 1; i < arr.length; i++){
        if(piv > arr[i]){
            swap++;
            swapArr(arr, swap, i);
        }
    }

    swapArr(arr, swap, start)

    return swap
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start=0, end=arr.length - 1) {

    if(start < end){
        let pivotIndex = pivot(arr, start, end)

        quickSort(arr, start, pivotIndex - 1);
    
        quickSort(arr, pivotIndex + 1, end)
    }

   

    return arr
}

module.exports = {pivot, quickSort};