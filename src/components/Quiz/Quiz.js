import { useState, useEffect } from 'react';
// import movieQuestion from '../../api/movieAPI';
import dogQuestion from '../../api/dogApi';
import flagQuestion from '../../api/flagApi';
import OptionButton from '../OptionButton/OptionButton';
import './quiz.css';

function Quiz(props) {
    const movie = false;
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        // if (movie) {
        //     movieQuestion().then((result) => {
        //         setQuestion(result);
        //     });
        // } else {
        //     dogQuestion().then((result) => {
        //         setQuestion(result);
        //     });
        // }

        flagQuestion().then((result) => {
                    setQuestion(result);
                });

    }, []);

    if (!question) return null;

    return (
        <>
            {false && <h1> {question.question.name} </h1>}

            <img src={question.question.image} alt='no-data' />
            <div className=''>
                {question.variants.map((e) => {
                    return <OptionButton key={e.name} name={e.name} isCorrect={e.isCorrect}/>
                })}
            </div>
        </>
    )
}
//{e.isCorrect ? '(true)' : '(false)'}
export default Quiz;