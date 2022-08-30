import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import movieQuestion from '../../api/movieAPI';
import dogQuestion from '../../api/dogApi';
import flagQuestion from '../../api/flagApi';
import OptionButton from '../../components/OptionButton/OptionButton';

import './quiz.css';

function Quiz(props) {

    const { category } = useParams();
    const [question, setQuestion] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);

    useEffect(() => {
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


    }, [category]);

    if (!question) return null;

    return (
        <div className='container'>
            {false && <h1> {question.question.name} </h1>}

            <h1>{questionNumber}</h1>

            <img src={question.question.image} alt='no-data' />

            <div>
                {question.variants.map((e) => {
                    return <OptionButton key={e.name} name={e.name} isCorrect={e.isCorrect} />
                })}
            </div>

            <Timer max={30}/>
        </div>
    )
}

export default Quiz;