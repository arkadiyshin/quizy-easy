import { useEffect, useState, useContext } from 'react';
import QuizContext from "../../context/QuizContext";
import { Line , Circle} from 'rc-progress';
import './timer.css';

function Timer(props) {

    //console.log(`timer didmount`)
    const [ percent, setPercent ] = useState(100);
    const { questionNumber, setQuestionNumber } = useContext(QuizContext);

    const step = 100 / props.max;

    useEffect(() => {

        //console.log(`timer percent ${percent}`);
        const intervalId = setInterval(() => {
            if(percent > 0) {
                setPercent( percent - step );
            } else {
                setQuestionNumber(questionNumber + 1);
                setPercent( 100 );
                //console.log(`timer ${questionNumber}`);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
<<<<<<< HEAD
    }, [])

    return (
        <div className='progress'>
            <Line percent={percent} strokeWidth={4} strokeColor={"#108ee9"} />
            { <Circle
                percent={percent}
                strokeLinecap="round"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
            /> }
=======
    }, [percent])//

    useEffect(() => {
        setPercent( 100 );
    }, [questionNumber])

    return (
        <div className='progress'>
            {/* <h5>{percent}</h5> */}
            <Line percent={percent} strokeWidth={2} strokeColor={"#108ee9"}></Line>
                
>>>>>>> 0ab1cd15563fbc9b307e50bf755ef94b11a1b251
        </div>
    )
}

export default Timer;