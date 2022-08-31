import { useContext } from 'react';
import QuizContext from "../../context/QuizContext";

function Result(props) {

    const { setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers } = useContext(QuizContext);

    const startNewGame = () => {

        setQuestionNumber(0);
        setNumberOfCorrectAnswers(0);
    }

    return (
        <>
            <h1>Your result {numberOfCorrectAnswers}</h1>
            <button onClick={startNewGame}>New game</button>
        </>
    )
}

export default Result;