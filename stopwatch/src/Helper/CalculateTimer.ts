const formatValue = (number:number) => (number < 10 ? `0${number}` : number);

const calculateTimer = (timeInSeconds: number): Array<number|string> => {
  let hours: number = Math.floor(timeInSeconds / 3600);
  let minutes: number = Math.floor((timeInSeconds - (hours * 3600) / 60));
  let seconds: number = timeInSeconds - (hours * 3600) - (minutes * 60);

  return [
    formatValue(hours), 
    formatValue(minutes), 
    formatValue(seconds)
  ];
}


export default calculateTimer;