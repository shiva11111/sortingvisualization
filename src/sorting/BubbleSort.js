function getBubbleSortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  bubbleSort(auxillaryArray, animations);
  array = auxillaryArray;
  return [animations, array];
}

function bubbleSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  let x = N - 1;
  while (x > 0) {
    let swapped = false;
    for (let i = 0; i < x; i++) {
      animations.push(["compare1", i, i + 1]);
      animations.push(["compare2", i, i + 1]);
      if (auxillaryArray[i] > auxillaryArray[i + 1]) {
        swapped = true;
        animations.push(["swap", i, auxillaryArray[i + 1]]);
        animations.push(["swap", i + 1, auxillaryArray[i]]);
        swap(auxillaryArray, i, i + 1);
      }
      // console.log(animations);
    }
    if (swapped === false) break;
    x--;
  }
}

function swap(l, f, s) {
  let temp = l[f];
  l[f] = l[s];
  l[s] = temp;
}

export default getBubbleSortAnimations;
