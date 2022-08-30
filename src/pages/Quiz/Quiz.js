import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import QuizContext from "../../context/QuizContext";

import Timer from '../../components/Timer/Timer';
import OptionButton from '../../components/OptionButton/OptionButton';

import movieQuestion from '../../api/movieAPI';
import dogQuestion from '../../api/dogApi';
import flagQuestion from '../../api/flagApi';

import './quiz.css';


function Quiz(props) {

    const { category } = useParams();
    const [question, setQuestion] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

    useEffect(() => {
        //console.log(`quiz use effect ${questionNumber}`);

        if (category === 'movies') {
            movieQuestion().then((result) => {
                setQuestion(result);
            });
        } else if (category === 'dogs') {
            dogQuestion().then((result) => {
                setQuestion(result);
            });
        } else if (category === 'flags') {
            flagQuestion().then((result) => {
                setQuestion(result);
            });
        }
    }, [category, questionNumber]);

    if (!question) return null;

    return (
        <div className='container'>
            
            {false && <h1> {question.question.name} </h1>}

            <QuizContext.Provider value={{ questionNumber, setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers }}>
                { <h1>{questionNumber} / {numberOfCorrectAnswers} </h1> }
                <Timer max={10} />
                <img src={question.question.image} alt='no-data' />

                <div>
                    {question.variants.map((e) => {
                        return <OptionButton key={e.name} name={e.name} isCorrect={e.isCorrect} />
                    })}
                </div>
            </QuizContext.Provider>



        </div>
    )
}

export default Quiz;