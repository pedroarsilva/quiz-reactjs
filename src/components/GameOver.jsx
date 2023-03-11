import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './GameOver.css';

import Celebration from '../img/celebration.svg';

export default function GameOver(){
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
      <img src={Celebration} alt="Fim do Quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}
