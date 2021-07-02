export const formatAlphabetOnly = (input) => {
  return input.replace(/[^a-zA-Z]/g, "");
};

export const formatNumberOnly = (input) => {
  return input.replace(/[^\d]/g, "");
};

export const formatNumberAndAlphabet = (input) => {
  return input.replace(/[^\da-zA-Z]/g, "");
};

export const formatFloat = (input) => {
  return input.replace(/[^\d.]/g, "");
};

export const formatFloatWithComma = (input) => {
  return input.replace(/[^\d,]/g, "");
};

export const formatCurrency = (
  input,
  locale = "id",
  prefix,
  suffix
) => {
  input = input
    .replace(/[^\d,]+/g, "")
    .replace(/^,$/g, "")
    .replace(/,+/g, ",")
    .replace(/,(\d+),/g, ",$1")
    .replace(/,(\d)/g, ".$1");
  const formatMoney = `${parseFloat(input.split(",")[0]).toLocaleString(
    locale
  )}${input.split(",")[1] !== undefined ? "," : ""}`;
  const result = input
    ? !formatMoney.includes("NaN")
      ? formatMoney
      : input
    : input;
  return `${prefix ? prefix : ""}${result}${suffix ? suffix : ""}`;
};
