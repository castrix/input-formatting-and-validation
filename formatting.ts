export const formatAlphabetOnly = (input: string): string => {
  return input.replace(/[^a-zA-Z]/g, "");
};

export const formatNumberOnly = (input: string): string => {
  return input.replace(/[^\d]/g, "");
};

export const formatNumberAndAlphabet = (input: string): string => {
  return input.replace(/[^\da-zA-Z]/g, "");
};

export const formatFloat = (input: string): string => {
  return input.replace(/[^\d.]/g, "");
};

export const formatFloatWithComma = (input: string): string => {
  return input.replace(/[^\d,]/g, "");
};

export const formatCurrency = (
  input: string,
  locale = "id",
  prefix?: string,
  suffix?: string
): string => {
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
