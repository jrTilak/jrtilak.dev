const unique = <T>(arr: T[]): T[] => {
  //@ts-expect-error: idk
  return [...new Set(arr)];
};

export default unique;
