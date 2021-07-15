import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface ProgressTypeProps {
    value: number;
    text: String;
}

const ProgressBar: React.FC<ProgressTypeProps> = (props) => {
      
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar 
                styles={buildStyles({
                    rotation: 0.50,
                    textSize: '16px',
                    pathColor: `rgba(62, 152, 199, ${props.value / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })} 
                value={props.value} 
                text={`${props.value}%`}
            />
            <div>{props.text}</div>
        </div>
    );
};

export default ProgressBar;
