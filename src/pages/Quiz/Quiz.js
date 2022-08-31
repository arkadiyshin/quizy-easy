import { useState} from 'react';
import Question from '../../components/Question/Question';
import Result from '../Result/Result';

import QuizContext from "../../context/QuizContext";

import './quiz.css';

function Quiz(props) {
    const numberOfQuestions = 10;
    const [questionNumber, setQuestionNumber] = useState(1);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [madeChoice, setMadeChoice] = useState(false);

    return (
        
        <>
            <QuizContext.Provider value={{ questionNumber, setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers, madeChoice, setMadeChoice }}>
                {questionNumber <= numberOfQuestions ? <Question />: <Result />}
            </QuizContext.Provider>
        </>
    )
}

export default Quiz;