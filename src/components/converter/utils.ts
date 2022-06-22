export const toOtherCurrency = (dollars: number, priceUSD: number) => {
  return dollars / priceUSD;
};

export const toDollars = (otherCurrencyAmount: number, priceUSD: number) => {
  return otherCurrencyAmount * priceUSD;
};

export const convert = (
  amount: string,
  priceUSD: number,
  convertValue: (fromValue: number, priceUSD: number) => number
) => {
  const value = parseFloat(amount);

  return Number.isNaN(value) ? "" : convertValue(value, priceUSD).toString();
};
