import { useState } from 'react';
import './Controls.css';

type Props = {
  setTimeInSeconds: Function
};

const Controls = ({ setTimeInSeconds }:Props) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlay = () => {
    let interval:any = setInterval(() => {
      setTimeInSeconds((prev:number) => prev + 1);
    }, 1000);
    setIntervalId(interval);
  }
  const handleStop = () => clearInterval(intervalId);
  const handleReset = () => {
    handleStop();
    setTimeInSeconds(0);
  };

  return (
    <section className="controls">
      <button onClick={handlePlay}>play</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </section>
  )
};

export default Controls;