function getInsertionAnimation(array) {
  let animations = [];
  let aux = array.slice();
  for (let i = 1; i < aux.length; i++) {
    let key = aux[i];
    let j = i - 1;
    while (j >= 0 && key < aux[j]) {
      animations.push(["compare1", j, i]);
      animations.push(["compare2", j, i]);
      animations.push(["swap", j + 1, aux[j]]);
      aux[j + 1] = aux[j];
      j--;
    }
    animations.push(["swap", j + 1, key]);
    aux[j + 1] = key;
  }
  return [animations];
}
export default getInsertionAnimation;
