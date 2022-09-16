<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieQuestion from '../../api/MovieAPI';
import Timer from '../../components/Timer/Timer';
import dogQuestion from '../../api/dogApi';
import flagQuestion from '../../api/flagApi';
import OptionButton from '../../components/OptionButton/OptionButton';
=======
import { useState} from 'react';
import Question from '../../components/Question/Question';
import Result from '../Result/Result';

import QuizContext from "../../context/QuizContext";
>>>>>>> 0ab1cd15563fbc9b307e50bf755ef94b11a1b251

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