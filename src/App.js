// import { useEffect, useState } from 'react'
// import Question from './components/Question'
// import {nanoid} from "nanoid"
// import './App.css';
// import Start from './components/Start';
// import Confetti from "react-confetti";
// function App() {

// const [start,setStart]=useState({go:false,id:''});
// const [category,setCategory]=useState(null);
// const [difficulty,setDifficulty]=useState(null);

// const category_f=(event)=>setCategory(event.target.value);
// const difficulty_f=(event)=>setDifficulty(event.target.value);
// function start_f() {
//   return setStart({
//     ...start,
//     go:!start.go,
//     id:nanoid()
//   });
// }
// function PlayAg() {
//   return setStart({
//     ...start,
//     go:!start.go,
//   });
// }


// return (<div className='App'>

// {start.go?
// <Question
//   id={start.id}
//   category={category}
//   difficulty={difficulty}
//   PlayAg={()=>PlayAg()} 
  
//   />
//   :
// <Start 
//   start={start_f}
//   category_f={(x)=>category_f(x)}
//   difficulty_f={(x)=>difficulty_f(x)}
//   category={category}
//   difficulty={difficulty}
//   />}
// {/* </div> */}

// </div>
// );
// }
// export default App;


import { useState, useCallback } from 'react'
import Question from './components/Question'
import { nanoid } from "nanoid"
import './App.css';
import Start from './components/Start';

//Move the Question and Start components outside the main component function. 
//This prevents the components from being redefined on each render.
const QuestionComponent = ({ start, category, difficulty, PlayAg }) => (
  <Question
    id={start.id}
    category={category}
    difficulty={difficulty}
    PlayAg={PlayAg}
  />
);

const StartComponent = ({ start_f, category_f, difficulty_f, category, difficulty }) => (
  <Start
    start={start_f}
    category_f={category_f}
    difficulty_f={difficulty_f}
    category={category}
    difficulty={difficulty}
  />
);

function App() {
  const [start, setStart] = useState({ go: false, id: '' });
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  const category_f = (event) => setCategory(event.target.value);
  const difficulty_f = (event) => setDifficulty(event.target.value);

  //useCallback hook to memoize the event handlers
  // This ensures that the same instance of the event handler is used across renders, 
  //preventing unnecessary re-renders.
  const start_f = useCallback(() => {
    setStart({
      ...start,
      go: !start.go,
      id: nanoid()
    });
  }, [start]);

  const PlayAg = useCallback(() => {
    setStart({
      ...start,
      go: !start.go,
    });
  }, [start]);

  return (
    <div className='App'>
      {start.go ? 
      <QuestionComponent 
        start={start} 
        category={category} 
        difficulty={difficulty} 
        PlayAg={PlayAg} /> 
        : 
        <StartComponent 
          start_f={start_f} 
          category_f={category_f} 
          difficulty_f={difficulty_f} 
          category={category} 
          difficulty={difficulty} />}
    </div>
  );
}

export default App;

