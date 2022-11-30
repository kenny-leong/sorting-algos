function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  let left = [];
  let right = [];

  let copyArr = arr.slice();

  let i = 1;

  while (i < arr.length) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
    i++;
  }

  // Recursively sort the left
  let sortedLeft = quicksort(left);
  // Recursively sort the right
  let sortedRight = quicksort(right);

  // Return the left, pivot and right in sorted order
  let returnArr = [...sortedLeft, pivot, ...sortedRight];

  return returnArr;

}


module.exports = [quicksort];
