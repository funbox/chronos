/**
 * Get duration object
 * @param  {number} seconds
 * @return {Object} - Duration result
 */
export default (seconds) => {
  const dayInSeconds = 60 * 60 * 24;
  const days = Math.floor(seconds / dayInSeconds);
  const hours = Math.floor((seconds - days * dayInSeconds) / (60 * 60));
  const minutes = Math.floor((seconds - days * dayInSeconds - hours * 60 * 60) / 60);

  return { days, hours, minutes };
};
