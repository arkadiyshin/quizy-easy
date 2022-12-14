import { useContext } from 'react';
import QuizContext from "../../context/QuizContext";
import CategoryContext from "../../context/CategoryContext";
import './result.css';


function Result(props) {

    const { setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers } = useContext(QuizContext);
    const { setCategoryChoosen } = useContext(CategoryContext);

    const startNewGame = () => {

        setQuestionNumber(0);
        setNumberOfCorrectAnswers(0);
    }

    const goToTheMainPage = () => {

        setQuestionNumber(0);
        setNumberOfCorrectAnswers(0);
        setCategoryChoosen(false);
        
    }

    return (
        <div className='result'>
            <h1>Your score is {numberOfCorrectAnswers} points</h1>
            <div className='result_buttons'>
            <button onClick={startNewGame}>Play again</button>
            <button onClick={goToTheMainPage}>Main page</button>
            </div>
        </div>
    )
}

export default Result;