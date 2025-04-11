export const calculateExperience = (startingDate: Date): string => {
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startingDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - startingDate.getMonth();

  // Calculate total experience in years with decimal points
  const totalExperience = yearsDifference + monthsDifference / 12;

  return totalExperience.toFixed(1);
};
