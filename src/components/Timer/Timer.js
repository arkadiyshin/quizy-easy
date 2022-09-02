import { useEffect, useState } from 'react';
import { Line, Circle } from 'rc-progress';
import './timer.css';

function Timer(props) {

    const [percent, setPercent] = useState(100);


    const step = 100 / props.max;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPercent((x) => {
                return percent <= 0 ? 100 : x - step;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
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
        </div>
    )
}

export default Timer;