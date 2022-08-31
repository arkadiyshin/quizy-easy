import { useState, useEffect, useContext } from 'react';
import QuizContext from "../../context/QuizContext";

import './optionButton.css';

function OptionButton(props) {
    const [buttonStatus, setButtonStatus] = useState(0);
    const [usersChoice, setUsersChoice] = useState(false);
    const { questionNumber, setQuestionNumber, setNumberOfCorrectAnswers, madeChoice, setMadeChoice } = useContext(QuizContext);

    useEffect(() => {
        console.log(`made choice false`);
        setMadeChoice(false);
    }, []);

    const chooseOption = async () => {

        //if (props.isCorrect) setNumberOfCorrectAnswers((x) => x + 1);
        if (props.isCorrect) {
            setButtonStatus(1);
            setNumberOfCorrectAnswers((x) => x + 1);
        } else {
            setButtonStatus(2);
        }

        setMadeChoice(true);
        setUsersChoice(true);

        setTimeout(() => {
            setQuestionNumber(questionNumber + 1);
            console.log(`option button ${questionNumber}`);
        }, 500)

    }
    return (
        <button disabled={madeChoice}
            className={buttonStatus === 0 ? 'option_button_active' :
                (buttonStatus === 1 || props.isCorrect ? 'option_button_correct' : 'option_button_incorrect')}
            /*  className={() => {
                //return 'option_button';
                if (madeChoice && props.isCorrect) {
                    return 'option_button_correct';
                } else if (madeChoice && usersChoice && !props.isCorrect) {
                    return 'option_button_incorrect';
                } else {
                    return 'option_button_active'
                };
            }}  */
            onClick={chooseOption}>{props.name}</button>
    )
}

export default OptionButton;