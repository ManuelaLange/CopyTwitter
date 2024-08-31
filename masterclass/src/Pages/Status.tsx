import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../componentes/header"
import { Separator } from "../componentes/Separator"
import { Tweet } from "../componentes/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status (){
  const [answers, setAnswer] = useState([
    'Concordo',
    'Faz sentido!',
    'Parabéns pelo progresso'
])
const [newAnswer, setNewAnswer]= useState('')
  
  function createNewAnswer(event: FormEvent){
    event.preventDefault()
    setAnswer([...answers, newAnswer])
    setNewAnswer('')
  }
  function handleHotKeySubmit (event: KeyboardEvent){
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)){
    setAnswer([...answers, newAnswer])
    setNewAnswer('')
    }
  }
    return(
        <main className='timeline'>
        <Header title="Tweet"/>
      <Tweet content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nulla harum a facere vel iusto sed vero, ea dolorum consectetur, rerum possimus dolorem maiores animi dolores officiis laudantium earum repudiandae."} />
        <Separator/>
      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/manuelalange.png" alt="Manuela Lange" />
          <textarea
          value={newAnswer}
          onKeyDown={handleHotKeySubmit} 
          id='tweet' 
          placeholder="Tweer your answer."
          onChange={(event) => {setNewAnswer(event.target.value)}}/>
        </label>
        <button type='submit'>
          <PaperPlaneRight/>
          <span>Answer</span>
          </button>
      </form>
      

     {answers.map(answer =>{
      return <Tweet key={answer} content={answer}/>
     })}

     </main> 
    )
}