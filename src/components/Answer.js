import React, { useEffect, useState } from "react"

import "../style/answers.css";
export default function Answer({correct_answer,incorrect_answers,id,hold_Ans,shoosingData,giveAns}) {

  const [all_ans,setAll_ans]=useState([])

  function shuffleArray(arr, str) {
    if (arr.length === 0) {
      return [];
    }
      // Create a copy of the original array
      arr.push(str);
      let shuffledArray = [...arr];
      // Iterate over the array and swap each element with a randomly selected element
      for (let i = 0; i < shuffledArray.length; i++) {
        let j = Math.floor(Math.random() * shuffledArray.length);
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      shuffledArray = [...new Set(shuffledArray)];  //Remove duplicate values from JS array 
      return shuffledArray;
    }

    useEffect(() => {
      
      setAll_ans(()=>{
          return shuffleArray(incorrect_answers, correct_answer);
      })
    }, [incorrect_answers]);

  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }          
  function getAnswerClass(answer) {
    if(giveAns){
      return correct_answer == answer  ? "correct" : shoosingData[id].includes(answer) ?"incorrect":"not-chosen";
    }

    return shoosingData[id].includes(answer) ? "chosen" : "not-chosen";
}
        
    return (   
    <div className="answers">
       
        {all_ans.map((x,i)=>{
            return(
            <div  id="ans" className={getAnswerClass(x)} key={i} onClick={() => hold_Ans(id, x)}>
            <p className={getAnswerClass(x)}>{decodeHTML(x)}</p>
          </div>)
              
        })
        }
    </div>

    )
}