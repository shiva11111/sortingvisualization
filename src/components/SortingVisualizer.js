import React, { useState, useEffect } from "react";
import getBubbleSortAnimations from "../sorting/BubbleSort";
import getMergeAnimations from "../sorting/MergeSort";
export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  //
  const getint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  };
  const resetArray = () => {
    setArray([]);
    let temp = [];
    for (var i = 0; i < 10; i++) {
      temp.push(getint(10, 50));
    }
    setArray(temp);
  };
  //
  useEffect(resetArray, []);
  //start bubble sort
  const bubbleSort = () => {
    const [animations, sortArray] = getBubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const changeCol =
        animations[i][0] === "compare1" || animations[i][0] === "compare2";
      const bars = document.getElementsByClassName("bar");
      // console.log(bars);
      if (changeCol === true) {
        const color = animations[i][0] === "compare1" ? "red" : "aqua";
        const [compare, indexF, indexS] = animations[i];
        if (compare) {
        }
        const barOne = bars[indexF].style;
        const barTwo = bars[indexS].style;
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 8);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 8);
        if (swap) {
        }
      }
    }
    if (sortArray) {
    }
  };
  //end bubble sort

  // start merge sort
  const mergeSort = () => {
    console.log(array);
    const [animations, sorted] = getMergeAnimations(array);
    // console.log(sorted);
    for (let i = 0; i < animations.length; i++) {
      const changeCol =
        animations[i][0] === "compare1" || animations[i][0] === "compare2";
      const bars = document.getElementsByClassName("bar");
      // console.log(bars);
      if (changeCol === true) {
        const color = animations[i][0] === "compare1" ? "red" : "aqua";
        const [compare, index1, index2] = animations[i];
        if (compare) {
        }
        const barOne = bars[index1].style;
        const barTwo = bars[index2].style;
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 5);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 5);
        if (swap) {
        }
      }
    }
  };
  // end merge sort

  return (
    <>
      <div className="container">
        {array.map((value, index) => (
          <div
            className="bar"
            key={index}
            style={{ height: `${value}rem` }}
          ></div>
        ))}
      </div>
      <button onClick={bubbleSort} className="btn">
        Bubble Sort
      </button>
      <button onClick={mergeSort} className="btn">
        Merge Sort
      </button>
    </>
  );
}
