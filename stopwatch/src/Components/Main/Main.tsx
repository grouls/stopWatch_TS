import { useState, useEffect } from 'react';
import calculateTimer          from '../../Helper/CalculateTimer';
import './Main.css';

const Main = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

  useEffect(() => {
    let timerArray:Array<number|string> = calculateTimer(timeInSeconds);
    setTimerArray(timerArray);
  }, [timeInSeconds]);

  return(
    <div className="container">
      <p className="timerText">{timerArray[0]}</p>
      <span>:</span>
      <p className="timerText">{timerArray[1]}</p>
      <span>:</span>
      <p className="timerText">{timerArray[2]}</p>
    </div>
  )
};

export default Main;