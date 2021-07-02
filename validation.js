export const isNotEmpty = (input) => {
  return !input;
};

export const isValidEmail = (input) => {
  return /^[^\s@]+@[^\s@]+$/g.test(input);
};

export const isValidNumber = (input) => {
  return /^\d+$/g.test(input);
};

export const isNoSpecialChar = (input) => {
  return /^[\da-zA-Z]+$/g.test(input);
};

export const isValidFloat = (input) => {
  return /^\d\.\d+$/g.test(input);
};

export const isValidPhone = (
  input,
  minLength,
  maxLength
) => {
  return (
    /^\d+$/g.test(input) &&
    input.length >= minLength &&
    input.length <= maxLength
  );
};
