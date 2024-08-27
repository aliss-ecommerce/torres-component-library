import { DIVIDER_VALUE_PRICE } from "src/types/constants";

export const getPrice = (value: number) => {
  return value / DIVIDER_VALUE_PRICE;
};

export const currencyFormatter = (value: number, currency: string, locale='es-PE') => {
  const price = getPrice(value);
  if (typeof price !== 'number' || isNaN(price)) {
    throw new Error('El valor proporcionado no es un número válido.');
  }
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};