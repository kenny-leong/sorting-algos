// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  let copyArr = arr.slice(0) //creates shallow copy of input arr
  let sorted = []; //create a sorted array

  while (copyArr.length > 0) { //while loop runs as long as copied array is not empty
    console.log(sorted.join(',')) //was told to leave this here for visualization

    let val = copyArr.pop() //mutates the shallow copy and stores last element

    if (sorted.length == 0) { //if sorted doesnt contain elements just push to sorted
      sorted.push(val)
    }

    if (sorted[0] > val) { // if sorted[0] is greater than val simply unshift the value to sorted arr
      sorted.unshift(val);
    } else {
        for (let i=sorted.length-1; i>=0; i--) { //otherwise just find where to insert the value while iterating backwards

          if (val > sorted[i]) {
            sorted.splice(i + 1, 0, val)
            break; //make sure to break otherwise for loop will keep running
          }
        }
    }
  }
  return sorted; //return array
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let divider = 1

  while (divider !== arr.length) {
    console.log(arr.join(','))

    let temp = arr[divider]

    if (temp < arr[0]) {
      arr.splice(divider, 1)
      arr.unshift(temp);
    } else {

        for (let i=divider; i>=0; i--) {
          if (temp > arr[i]) {
            arr.splice(divider, 1);
            arr.splice(i + 1, 0, temp)
            break;
          }
        }
    }


    divider++;
  }
  return arr;

}

module.exports = [insertionSort, insertionSortInPlace];
