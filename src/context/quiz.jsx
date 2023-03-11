// AULA - 26:50 - 33:12 - useRedecuer
// AULA - 33:13 - 38:23 - mudança de estado
import { createContext, useReducer } from "react";
import questions from '../data/questions';

// const para ver o estagio do jogo
const STAGES =["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}

function quizReducer(state, action){
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1]
            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return{
                ...state,
                questions: reorderedQuestions,
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nextQuestion]){
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            }
            
        case "NEW_GAME":
            return initialState

        default:
            return state;
    }
}
export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}