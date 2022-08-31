import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import QuizContext from "../../context/QuizContext";



import Timer from '../Timer/Timer';
import OptionButton from '../OptionButton/OptionButton';

import movieQuestion from '../../api/movieAPI';
import dogQuestion from '../../api/dogApi';
import flagQuestion from '../../api/flagApi';

import './question.css';


function Question(props) {

    
    const { category } = useParams();
    const [question, setQuestion] = useState(null);
    
    const { questionNumber, numberOfCorrectAnswers } = useContext(QuizContext);

    console.log(category);

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

            
                { <h1>{questionNumber} / {numberOfCorrectAnswers} </h1> }
                <Timer max={10} />
                <img src={question.question.image} alt='no-data' />

                <div>
                    {question.variants.map((e) => {
                        return <OptionButton key={e.name} name={e.name} isCorrect={e.isCorrect} />
                    })}
                </div>
            



        </div>
    )
}

export default Question;