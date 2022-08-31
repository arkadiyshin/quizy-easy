import { useState} from 'react';
import Question from '../../components/Question/Question';
import Result from '../Result/Result';

import QuizContext from "../../context/QuizContext";

function Quiz(props) {
    const numberOfQuestions = 10;
    const [questionNumber, setQuestionNumber] = useState(1);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

    return (
        
        <>
            <QuizContext.Provider value={{ questionNumber, setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers }}>
                {questionNumber <= numberOfQuestions ? <Question />: <Result />}
            </QuizContext.Provider>
        </>
    )
}

export default Quiz;