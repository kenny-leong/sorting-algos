
function bubbleSort(arr) {
  let counter = 0;

    // Iterate through the array
  for (let i=0; i<arr.length; i++) {

    if (arr[i] > arr[i+1]) {
      let tmp = arr[i]
      arr[i] = arr[i+1];
      arr[i+1] = tmp;
      counter++;
      console.log(arr.join(","));
    }
  }

  if (counter == 0) return;

  return bubbleSort(arr);

}

module.exports = bubbleSort;
