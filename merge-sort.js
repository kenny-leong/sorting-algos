// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Divide the array in half
  let midPoint = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint, arr.length)

  // Recursively sort the left half
  let sortedLeftArr = mergeSort(leftArr);

  // Recursively sort the right half
  let sortedRightArr = mergeSort(rightArr);

  // Merge the halves together and return
  return merge(sortedLeftArr, sortedRightArr)

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let returnArr = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrA.length && rightIndex < arrB.length) {

    if (arrA[leftIndex] < arrB[rightIndex]) {
      returnArr.push(arrA[leftIndex]);
      leftIndex++;
    } else {
        returnArr.push(arrB[rightIndex]);
        rightIndex++;
    }
  }

  return [...returnArr, ...arrA.slice(leftIndex), ...arrB.slice(rightIndex)]

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];
