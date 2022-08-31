import { useContext } from 'react';
import QuizContext from "../../context/QuizContext";
import './result.css';


function Result(props) {

    const { setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers } = useContext(QuizContext);

    const startNewGame = () => {

        setQuestionNumber(0);
        setNumberOfCorrectAnswers(0);
    }

    const goToTheMainPage = () => {

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