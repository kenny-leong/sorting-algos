function ageSort(users) {

  function ageComparison(userA, userB) {
    return userA.age - userB.age;
  }
  return users.sort(ageComparison);
}

function oddEvenSort(arr) {

  function divisibleBy2 (a, b) {
    if (a % 2 == 0 && b % 2 !== 0) {
      return 1;
    } else if (a % 2 !== 0 && b % 2 == 0) {
        return -1;
    } else {
        return a-b;
    }
  }

  return arr.sort(divisibleBy2);
}

function validAnagrams(s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  if (s == t) return true

  else return false;
}

function reverseBaseSort(arr) {

  function bases (a, b) {
    if (a.toString().length > b.toString().length) {
      return -1;
    } else if (a.toString().length < b.toString().length) {
      return 1;
    } else {
      return a-b;
    }
  }
  return arr.sort(bases);
}

function frequencySort(arr) {

  const freqCounter = arr.reduce(function(acc, value) {
    if (acc[value]) {
      acc[value]++;
    } else {
      acc[value] = 1;
    }
    return acc;
  }, {});

  function dupe (a, b) {
    if (freqCounter[a] > freqCounter[b]) {
      return 1;
    } else if (freqCounter[a] < freqCounter[b]) {
        return -1;
    } else {
        return b-a;
    }
  }
  return arr.sort(dupe);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
