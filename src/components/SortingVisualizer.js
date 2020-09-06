import React, { useState, useEffect } from "react";
import getBubbleSortAnimations from "../sorting/BubbleSort";
import getMergeAnimations from "../sorting/MergeSort";
import getQuickAnimations from "../sorting/QuickSort";
import getSelectionAnimation from "../sorting/SelectionSort";
import getInsertionAnimation from "../sorting/InsertionSort";
import getHeapAnimation from "../sorting/HeapSort";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  //
  const getint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
  };
  const resetArray = () => {
    setArray([]);
    let temp = [];
    for (var i = 0; i < 25; i++) {
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
    const [animations] = getMergeAnimations(array);
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

  //start quick
  const quickSort = () => {
    console.log(array);
    const [animations] = getQuickAnimations(array);
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
        }, i * 15);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 15);
        if (swap) {
        }
      }
    }
  };
  //end quick

  //start selection
  const selectionSort = () => {
    console.log(array);
    const [animations] = getSelectionAnimation(array);
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
        }, i * 15);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 15);
        if (swap) {
        }
      }
    }
  };
  //end selection

  //start insertion
  const insertionSort = () => {
    // console.log(array);
    const [animations] = getInsertionAnimation(array);
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
        }, i * 15);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 15);
        if (swap) {
        }
      }
    }
  };
  //end insertion

  //start heap
  const heapSort = () => {
    // console.log(array);
    const [animations] = getHeapAnimation(array);
    console.log(animations);
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
        }, i * 15);
      } else {
        const [swap, barindex, newheight] = animations[i];
        if (barindex === -1) {
          continue;
        }
        const barStyle = bars[barindex].style;
        setTimeout(() => {
          barStyle.height = `${newheight}rem`;
        }, i * 15);
        if (swap) {
        }
      }
    }
  };
  //end heap

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
      <button onClick={quickSort} className="btn">
        Quick Sort
      </button>
      <button onClick={selectionSort} className="btn">
        Selection Sort
      </button>
      <button onClick={insertionSort} className="btn">
        Insertion Sort
      </button>
      <button onClick={heapSort} className="btn">
        Heap Sort
      </button>
      <button onClick={resetArray} className="btn">
        Reset Array
      </button>
    </>
  );
}
