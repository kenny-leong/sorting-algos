

function selectionSort(arr) {

  let copyArr = arr.slice();
  let sorted = [];

  while (copyArr.length > 0) {
    console.log(sorted.join(","));

    let smallest;
    let index = -1;

    for (let i=0; i<copyArr.length; i++) {
      if (copyArr[i] < smallest || smallest == undefined) {
        smallest = copyArr[i]
        index = i;
      }
    }

    copyArr.splice(index, 1);
    sorted.push(smallest)
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  let divider = 0;

  while (divider !== arr.length) {
    console.log(arr.join(","));

    let smallest;
    let index = -1;

    for (let i=divider; i<arr.length; i++) {
      if (arr[i] < smallest || smallest == undefined) {
        smallest = arr[i]
        index = i;
      }
    }

    for (i=index; i>divider; i--) {
      arr[i] = arr[i-1]
    }

    arr[divider] = smallest;
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
