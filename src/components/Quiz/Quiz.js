import { useState, useEffect } from 'react';
import movieQuestion from '../../api/movieApi';
import dogQuestion from '../../api/dogApi';
import './quiz.css';

function Quiz(props) {
    const movie = false;
    const [question, setQuestion] = useState(null);
    
    useEffect(() => {
        if(movie) {
            movieQuestion().then((result) => {
                setQuestion(result);
            });
        } else {
            dogQuestion().then((result) => {
                setQuestion(result);
            });
        }
        

    }, []);

    if (!question) return null;

    return (
        <>
            <h1> {question.question.name} </h1>
            <img src={question.question.image} alt='no-data' />
            {question.variants.map( (e) => {
                return <button key={e.name}> {e.name} {e.isCorrect ? '(true)' : '(false)'}</button>
            })}
        </>
    )
}

export default Quiz;