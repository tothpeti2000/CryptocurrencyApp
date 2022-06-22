export const subtractWeekFromCurrentDate = () => {
  const dateCopy = new Date();
  dateCopy.setDate(dateCopy.getDate() - 1 * 7);

  return dateCopy.toISOString();
};
