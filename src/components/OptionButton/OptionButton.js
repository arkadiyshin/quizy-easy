import { useState } from 'react';
import './optionButton.css';

function OptionButton(props) {
    const [ buttonStatus, setButtonStatus] = useState(0);

    const changeButtonStatus = () => {
        setButtonStatus( props.isCorrect ? 1 : 2 );
    }
    return (
        <button className={buttonStatus === 0 ? 'option_button' : 
        (buttonStatus === 1 ? 'option_button_correct' : 'option_button_incorrect') } 
        onClick={changeButtonStatus}>{props.name}</button>
    )
}

export default OptionButton;