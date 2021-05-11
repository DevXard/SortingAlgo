function merge(array1, array2) {
    const result = [];
    let i = 0;
    let j = 0;

    // compare values from the 2 arrays at specific pointers and add to result
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]){
            result.push(array1[i]);
            i++
        }else{
            result.push(array2[j]);
            j++
        }
    }

    // if extra values left in first array add them to result
    while(i < array1.length){
        result.push(array1[i])
        i++
    }

    // if extra values left in second array add them to result
    while(j < array2.length){
        result.push(array2[j])
        j++
    }
    return result;

}

function mergeSort(arr) {

    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

module.exports = { merge, mergeSort};