import { useEffect, useState } from 'react'
import Question from './components/Question'
import {nanoid} from "nanoid"
import './App.css';
import Start from './components/Start';
import Confetti from "react-confetti";
function App() {

const [start,setStart]=useState({go:false,id:''});
const [category,setCategory]=useState(null);
const [difficulty,setDifficulty]=useState(null);

const category_f=(event)=>setCategory(event.target.value);
const difficulty_f=(event)=>setDifficulty(event.target.value);
function start_f() {
  return setStart({
    ...start,
    go:!start.go,
    id:nanoid()
  });
}
function PlayAg() {
  return setStart({
    ...start,
    go:!start.go,
  });
}


return (<div className='App'>

{start.go?
<Question
  id={start.id}
  category={category}
  difficulty={difficulty}
  PlayAg={()=>PlayAg()} 
  
  />
  :
<Start 
  start={start_f}
  category_f={(x)=>category_f(x)}
  difficulty_f={(x)=>difficulty_f(x)}
  category={category}
  difficulty={difficulty}
  />}
{/* </div> */}

</div>
);
}
export default App;
