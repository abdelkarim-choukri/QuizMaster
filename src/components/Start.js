// import React, { useEffect,useState } from "react"

// import "../style/start.css";
// import 'animate.css';

// export default function Start({start,category_f,difficulty_f,difficulty,category}) {


// return (<div className="start animate__animated animate__pulse">
// <h2 >Quizzical</h2>

// <label htmlFor="trivia_category">Select Category: </label><br></br>
// <select name="trivia_category" className="form-control" onChange={category_f} defaultValue={category?category:"any"}>
// 			<option value="any">Any Category</option>
// 			<option value="9">General Knowledge</option>
//             <option value="10">Entertainment: Books</option>
//             <option value="11">Entertainment: Film</option>
//             <option value="12">Entertainment: Music</option>
//             <option value="13">Entertainment: Musicals & Theatres</option>
//             <option value="14">Entertainment: Television</option>
//             <option value="15">Entertainment: Video Games</option>
//             <option value="16">Entertainment: Board Games</option>
//             <option value="17">Science & Nature</option>
//             <option value="18">Science: Computers</option>
//             <option value="19">Science: Mathematics</option>
//             <option value="20">Mythology</option>
//             <option value="21">Sports</option>
//             <option value="22">Geography</option>
//             <option value="23">History</option>
//             <option value="24">Politics</option>
//             <option value="25">Art</option>
//             <option value="26">Celebrities</option>
//             <option value="27">Animals</option>
//             <option value="28">Vehicles</option>
//             <option value="29">Entertainment: Comics</option>
//             <option value="30">Science: Gadgets</option>
//             <option value="31">Entertainment: Japanese Anime & Manga</option>
//             <option value="32">Entertainment: Cartoon & Animations</option>		
// </select>

// <br></br>

// <label htmlFor="trivia_difficulty">Select Difficulty: </label><br></br>
// <select name="trivia_difficulty" className="form-control" onChange={difficulty_f} defaultValue={difficulty?difficulty:"any"}>
// 			<option value="any">Any Difficulty</option>
// 			<option value="easy">Easy</option>
// 			<option value="medium">Medium</option>
// 			<option value="hard">Hard</option>
// </select>

// <br></br>

// <button class="btn btn-primary" onClick={start} type="submit">Start quiz</button>
// </div>)

// }

import React from "react";
import "../style/start.css";
import 'animate.css';

export default function Start({ start, category_f, difficulty_f, difficulty, category }) {
    const categoryOptions = [
        { value: "any", label: "Any Category" },
        { value: "9", label: "General Knowledge" },
        { value: "10", label: "Entertainment: Books" },
        { value: "11", label: "Entertainment: Film" },
        { value: "12", label: "Entertainment: Music" },
        { value: "13", label: "Entertainment: Musicals & Theatres" },
        { value: "14", label: "Entertainment: Television" },
        { value: "15", label: "Entertainment: Video Games" },
        { value: "16", label: "Entertainment: Board Games" },
        { value: "17", label: "Science & Nature" },
        { value: "18", label: "Science: Computers" },
        { value: "19", label: "Science: Mathematics" },
        { value: "20", label: "Mythology" },
        { value: "21", label: "Sports" },
        { value: "22", label: "Geography" },
        { value: "23", label: "History" },
        { value: "24", label: "Politics" },
        { value: "25", label: "Art" },
        { value: "26", label: "Celebrities" },
        { value: "27", label: "Animals" },
        { value: "28", label: "Vehicles" },
        { value: "29", label: "Entertainment: Comics" },
        { value: "30", label: "Science: Gadgets" },
        { value: "31", label: "Entertainment: Japanese Anime & Manga" },
        { value: "32", label: "Entertainment: Cartoon & Animations" },
      ];
      

  const difficultyOptions = [
    { value: "any", label: "Any Difficulty" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <div className="start animate__animated animate__pulse">
      <h2>Quizzical</h2>
      <label htmlFor="trivia_category">Select Category: </label><br />
      <select name="trivia_category" className="form-control" onChange={category_f} defaultValue={category || "any"}>
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />

      <label htmlFor="trivia_difficulty">Select Difficulty: </label><br />
      <select name="trivia_difficulty" className="form-control" onChange={difficulty_f} defaultValue={difficulty || "any"}>
        {difficultyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />

      <button className="btn btn-primary" onClick={start} type="submit">
        Start quiz
      </button>
    </div>
  );
}
