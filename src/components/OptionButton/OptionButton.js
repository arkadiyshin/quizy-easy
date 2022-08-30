import './optionButton.css';

function OptionButton(props) {
    
    return (
        <button className='option_button'>{props.name} {props.isCorrect ?  '(correct answer)' : ''}</button>
    )
}

export default OptionButton;