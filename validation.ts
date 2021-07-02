export const isNotEmpty = (input: string): boolean => {
  return !input;
};

export const isValidEmail = (input: string): boolean => {
  return /^[^\s@]+@[^\s@]+$/g.test(input);
};

export const isValidNumber = (input: string): boolean => {
  return /^\d+$/g.test(input);
};

export const isNoSpecialChar = (input: string): boolean => {
  return /^[\da-zA-Z]+$/g.test(input);
};

export const isValidFloat = (input: string): boolean => {
  return /^\d\.\d+$/g.test(input);
};

export const isValidPhone = (
  input: string,
  minLength?: number,
  maxLength?: number
): boolean => {
  return (
    /^\d+$/g.test(input) &&
    input.length >= minLength &&
    input.length <= maxLength
  );
};
