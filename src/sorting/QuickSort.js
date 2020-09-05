function getQuickAnimations(array) {
  let animations = [];
  let aux = array.slice();
  quicksort(aux, 0, aux.length - 1, animations);
  console.log(aux);
  return [animations];
}

function quicksort(aux, start, end, animations) {
  if (start < end) {
    let p = getPartition(aux, start, end, animations);
    quicksort(aux, start, p - 1, animations);
    quicksort(aux, p + 1, end, animations);
  }
}

function getPartition(aux, start, end, animations) {
  let pivot = aux[end];
  let pindex = start;
  for (let i = start; i < end; i++) {
    animations.push(["compare1", i, end]);
    if (aux[i] <= pivot) {
      animations.push(["swap", i, aux[pindex]]);
      animations.push(["swap", pindex, aux[i]]);
      let temp = aux[i];
      aux[i] = aux[pindex];
      aux[pindex] = temp;
      pindex++;
    }
    animations.push(["compare2", i, end]);
  }
  animations.push(["swap", end, aux[pindex]]);
  animations.push(["swap", pindex, aux[end]]);
  let temp1 = aux[end];
  aux[end] = aux[pindex];
  aux[pindex] = temp1;
  return pindex;
}

export default getQuickAnimations;
