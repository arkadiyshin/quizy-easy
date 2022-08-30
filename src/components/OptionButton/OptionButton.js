import { useState, useContext } from 'react';
import QuizContext from "../../context/QuizContext";

import './optionButton.css';

function OptionButton(props) {
    const [ buttonStatus, setButtonStatus] = useState(0);
    const { questionNumber, setQuestionNumber, numberOfCorrectAnswers, setNumberOfCorrectAnswers } = useContext(QuizContext);

    const chooseOption = () => {
        
        if(props.isCorrect) {
            setButtonStatus(1);
            setNumberOfCorrectAnswers( (x) => x+1);
        } else {
            setButtonStatus(2);
        }

        setTimeout( () => {
            setQuestionNumber(questionNumber + 1);
            console.log(`option button ${questionNumber}`);
        },500)
        
    }
    return (
        <button className={buttonStatus === 0 ? 'option_button' : 
        (buttonStatus === 1 ? 'option_button_correct' : 'option_button_incorrect') } 
        onClick={chooseOption}>{props.name}</button>
    )
}

export default OptionButton;