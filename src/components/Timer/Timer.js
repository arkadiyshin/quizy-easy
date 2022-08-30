import {useEffect, useState} from 'react';
import { Circle, Line } from 'rc-progress';
import './timer.css';

function Timer(props) {

    const [percent, setPercent] = useState(0);


    const step = 100 / props.max;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercent((x) => x+step);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [percent])

    return (
        <div className='progress'>
            <Circle
                percent={percent}
                strokeWidth={6}
                strokeLinecap="Circle"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
            />
        </div>
    )
}

export default Timer;