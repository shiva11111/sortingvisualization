function getSelectionAnimation(array) {
  let animations = [];
  let aux = array.slice();
  for (let i = 0; i < aux.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < aux.length; j++) {
      if (aux[minIndex] > aux[j]) minIndex = j;
      animations.push(["compare1", minIndex, j]);
      animations.push(["compare2", minIndex, j]);
    }
    animations.push(["swap", minIndex, aux[i]]);
    animations.push(["swap", i, aux[minIndex]]);
    let temp = aux[i];
    aux[i] = aux[minIndex];
    aux[minIndex] = temp;
  }
  return [animations];
}

export default getSelectionAnimation;
