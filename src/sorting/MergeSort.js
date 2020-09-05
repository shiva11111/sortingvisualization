function getMergeAnimations(array) {
  let animations = [];
  let auxillary = array.slice();
  mergesort(auxillary, 0, auxillary.length - 1, animations);
  return [animations, auxillary];
}

function mergesort(auxillary, startindex, endindex, animations) {
  if (startindex === endindex) {
    return;
  }
  const middleindex = Math.floor((startindex + endindex) / 2);
  mergesort(auxillary, startindex, middleindex, animations);
  mergesort(auxillary, middleindex + 1, endindex, animations);
  merge(auxillary, startindex, middleindex, endindex, animations);
}

function merge(auxillary, startindex, middleindex, endindex, animations) {
  let sortArray = [];
  let i = startindex;
  let j = middleindex + 1;
  while (i <= middleindex && j <= endindex) {
    animations.push(["compare1", i, j]);
    animations.push(["compare2", i, j]);
    if (auxillary[i] <= auxillary[j]) {
      sortArray.push(auxillary[i++]);
    } else {
      sortArray.push(auxillary[j++]);
    }
  }
  while (i <= middleindex) {
    animations.push(["compare1", i, i]);
    animations.push(["compare2", i, i]);
    sortArray.push(auxillary[i++]);
  }
  while (j <= endindex) {
    animations.push(["compare1", j, j]);
    animations.push(["compare2", j, j]);
    sortArray.push(auxillary[j++]);
  }
  console.log(sortArray);
  for (let i = startindex; i <= endindex; i++) {
    animations.push(["compare1", i, i - startindex]);
    animations.push(["override", i, sortArray[i - startindex]]);
    animations.push(["compare2", i, i - startindex]);
    auxillary[i] = sortArray[i - startindex];
  }
}

export default getMergeAnimations;
