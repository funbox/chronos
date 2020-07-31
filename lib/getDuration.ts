/**
 * Get duration object
 * @param seconds
 * @return - Duration result
 */

type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default (seconds: number): Duration => {
  const dayInSeconds = 60 * 60 * 24;
  const days = Math.floor(seconds / dayInSeconds);
  const hours = Math.floor((seconds - days * dayInSeconds) / (60 * 60));
  const minutes = Math.floor((seconds - days * dayInSeconds - hours * 60 * 60) / 60);

  return { days, hours, minutes, seconds: seconds % 60 };
};
