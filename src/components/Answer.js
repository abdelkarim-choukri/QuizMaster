import React, { useEffect, useState, useCallback } from "react";
import "../style/answers.css";

export default function Answer({ correct_answer, incorrect_answers, id, hold_Ans, shoosingData, giveAns }) {
  const [all_ans, setAll_ans] = useState([]);


  // Function to shuffle an array using Fisher-Yates algorithm (Knuth shuffle)
const shuffleArray = useCallback((arr, str) => {
  // Create a new array and add the new element ('str') to it
  const shuffledArray = [...arr, str];

  // Get the length of the shuffled array
  const length = shuffledArray.length;

  // Iterate over the array in reverse order
  for (let i = length - 1; i > 0; i--) {
    // Generate a random index within the range [0, i]
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the current element (at index 'i') with a randomly selected element (at index 'randomIndex')
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  // Return the shuffled array
  return shuffledArray;
}, []);
  

  const shuffleArrayCallback = useCallback(() => {
    setAll_ans(() => {
      return shuffleArray(incorrect_answers, correct_answer);
    });
  }, [correct_answer, incorrect_answers]);

  useEffect(() => {
    shuffleArrayCallback();
  }, [shuffleArrayCallback]);

  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  function getAnswerClass(answer) {
    if (giveAns) {
      return correct_answer === answer ? "correct" : shoosingData[id].includes(answer) ? "incorrect" : "not-chosen";
    }

    return shoosingData[id].includes(answer) ? "chosen" : "not-chosen";
  }

  return (
    <div className="answers">
      {all_ans.map((x, i) => (
        <div id="ans" className={getAnswerClass(x)} key={i} onClick={() => hold_Ans(id, x)}>
          <p className={getAnswerClass(x)}>{decodeHTML(x)}</p>
        </div>
      ))}
    </div>
  );
}
