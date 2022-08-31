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

    const { questionNumber, numberOfCorrectAnswers, madeChoice, setMadeChoice } = useContext(QuizContext);

    //console.log(category);

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
        setMadeChoice(false);
    }, [category, questionNumber]);

    if (!question) return null;

    return (
        <div className='container'>

        {/*     {false && <h1> {question.question.name} </h1>} */}
            <div>
            <div className='question_header'>
                <h1>{questionNumber}</h1> 
                <Timer max={10} />
                <h1> {numberOfCorrectAnswers} </h1>
            </div>
            
            <img src={question.question.image} alt='no-data' />

            </div>
            
            <div>
                {question.variants.map((e) => {
                    return <OptionButton key={e.name + questionNumber} name={e.name} isCorrect={e.isCorrect} disabled={madeChoice} />
                })}
            </div>

        </div>
    )
}

export default Question;