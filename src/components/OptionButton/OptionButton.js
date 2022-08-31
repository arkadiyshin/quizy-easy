import { useState, useEffect, useContext } from 'react';
import QuizContext from "../../context/QuizContext";

import './optionButton.css';

function OptionButton(props) {
    const [buttonStatus, setButtonStatus] = useState(0);
    const { questionNumber, setQuestionNumber, setNumberOfCorrectAnswers, madeChoice, setMadeChoice } = useContext(QuizContext);

    useEffect(() => {
        console.log(`made choice false`);
        setMadeChoice(false);
    }, []);

    const chooseOption = async () => {

        if (props.isCorrect) {
            setButtonStatus(1);
            setNumberOfCorrectAnswers((x) => x + 1);
        } else {
            setButtonStatus(2);
        }



        setMadeChoice(true);


        setTimeout(() => {
            setQuestionNumber(questionNumber + 1);
            console.log(`option button ${questionNumber}`);
        }, 2000)

    }
    return (
        <button disabled={madeChoice && buttonStatus === 0} className={buttonStatus === 0 ? 'option_button' :
            (buttonStatus === 1 ? 'option_button_correct' : 'option_button_incorrect')}
            onClick={chooseOption}>{props.name}</button>
    )
}

export default OptionButton;