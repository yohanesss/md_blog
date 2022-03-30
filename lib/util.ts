export const isStringArray = (test: any[]): boolean => {
  return (
    Array.isArray(test) && !test.some((value) => typeof value !== "string")
  );
};

export const getNFirstWordFromText = (text: string, number: number) =>
  text.split(" ".slice(0, number));
