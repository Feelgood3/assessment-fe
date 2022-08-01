export function randomNumber() {
  return Math.floor(Math.random() * 100);
}

export function setNumbers(counter) {
  const minute = 60;
  if (counter < 10) {
    return `00:00:0${counter}`;
  } if (counter < 60) {
    return `00:00:${counter}`;
  } if (counter === 60) {
    return '00:01:00';
  } if (counter > 60) {
    const seconds = counter - minute;
    if (seconds < 10) {
      return `00:01:0${seconds}`;
    }
    return `00:01:${seconds}`;
  } if (counter === 120) {
    return '00:02:00';
  }
  return counter;
}
