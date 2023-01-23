import React, { useEffect,useState } from "react"
import Answer from "./Answer"
import "bootstrap/dist/css/bootstrap.css";
import "../style/question.css";
// import { useWindowSize } from 'usehooks-ts';
import Confetti from "react-confetti";




export default function Question(props) {


const [shoosingData,setShoosingData]=useState(new Array(10).fill(""));
const [score,setScore]=useState(11);
const [data, setData] = useState({});
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
const [giveAns,setGivAns]=useState(false);
// const [api,setApi]=useState('')
// const { width, height } = useWindowSize()

const api_url_f=(category,difficulty)=>{
  let cat_url = "";
  let dif_url = '';
  if (category){
    cat_url=`&category=${category}`;
  }
  if(difficulty){
    dif_url=`&difficulty=${difficulty}`;
  }
  return `https://opentdb.com/api.php?amount=10${cat_url}${dif_url}`;
}
useEffect(() => {
  
  // const api_url = api_url_f(props.category, props.difficulty);
  const controller = new AbortController();
  async function fetchData(api_url) {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setData(data.results);
      
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  fetchData(api_url_f(props.category, props.difficulty));

  return () => {
    controller.abort();
  };
}, [props.id]);
// console.log(data)
  if (loading) {
    return <span class="loader"></span>;
  }
  if (error) {
    return <div className="error">
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg>
      <p>An error occurred: {error.message}</p></div>;
  }
  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  //================================================

  const C_ans = (data) => {
    return data.map(x => x.correct_answer);
  }
  
  const all_C_ans=C_ans(data);
// console.log(all_C_ans);

function hold_Ans(i,ans) {
  console.log(shoosingData)
if(!giveAns){
  if (shoosingData.length==0) {
    setShoosingData(prevState => {
      const newShoosingData = [...prevState];
      newShoosingData[i] = ans;
      return newShoosingData;});
    
  }
  if (i < shoosingData.length && shoosingData[i] === ans) {
    return 0;
  } else {
    setShoosingData(prevState => {
      const newShoosingData = [...prevState];
      newShoosingData[i] = ans;
      return newShoosingData;
    });
    
  }
}}
 function check() {
  console.log(data);
  console.log(all_C_ans);
  setGivAns(true);
  let x=0;
  for (let i = 0; i < shoosingData.length; i++) {
    if (shoosingData[i] === all_C_ans[i]) {
      x++;
      
    }
  }
  console.log(all_C_ans);
  console.log(x);
  
  return setScore(x);
} 

function Play_again() {
return window.location.reload();
  
}

  return (
    <div className="all_questions">
    {data.map((obj,index) => (
   <div key={index} className='ques_ans'>
    <div className="question">
        <h5 className="question">{decodeHTML(obj.question)}</h5>
    </div>
    
    <Answer 
      id ={index}
      giveAns={giveAns}
      Question={obj.question}
      hold_Ans={(id, ans) => hold_Ans(id, ans)}
      incorrect_answers={obj.incorrect_answers}
      correct_answer={obj.correct_answer}
      shoosingData={shoosingData}
      
    />
    <br></br>
  </div>
))}{ score==11 ?
<button className="btn btn-primary" onClick = {check} >check answer</button>:
<div className="play-again">
  <p className="play-again">you scored {score}/10 correct answers </p><button class="btn btn-primary" onClick = {props.PlayAg}>Play again</button>
</div>}


</div>
  );
}