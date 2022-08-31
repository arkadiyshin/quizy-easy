import { useState} from 'react';
import Question from '../../components/Question/Question';

import QuizContext from "../../context/QuizContext";

function Quiz(props) {
    
    const [questionNumber, setQuestionNumber] = useState(1);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

    return (
        
        <>
            <QuizContext.Provider value={{ questionNumber, setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers }}>
                <Question />
            </QuizContext.Provider>
        </>
    )
}

export default Quiz;