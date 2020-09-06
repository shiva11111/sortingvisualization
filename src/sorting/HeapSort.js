function getHeapAnimation(array) {
  let animations = [];
  let aux = array.slice();
  heapSort(aux, aux.length, animations);
  //   console.log(aux);
  return [animations];
}

function heapSort(aux, n, animations) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(aux, n, i, animations);
  }
  for (let i = n - 1; i > 0; i--) {
    animations.push(["swap", 0, aux[i]]);
    animations.push(["swap", i, aux[0]]);
    let temp = aux[0];
    aux[0] = aux[i];
    aux[i] = temp;

    heapify(aux, i, 0, animations);
  }
}

function heapify(aux, n, i, animations) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && aux[left] > aux[largest]) {
    animations.push(["compare1", left, largest]);
    animations.push(["compare2", left, largest]);
    largest = left;
  }
  if (right < n && aux[right] > aux[largest]) {
    animations.push(["compare1", right, largest]);
    animations.push(["compare2", right, largest]);
    largest = right;
  }
  if (largest !== i) {
    animations.push(["swap", i, aux[largest]]);
    animations.push(["swap", largest, aux[i]]);
    let temp = aux[i];
    aux[i] = aux[largest];
    aux[largest] = temp;
    heapify(aux, n, largest, animations);
  }
}

export default getHeapAnimation;
