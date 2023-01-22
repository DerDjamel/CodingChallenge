const formatPrice = (style: string = 'currency', currency: string = 'GBP') => {
  const formatter = new Intl.NumberFormat('en', {
    style,
    currency
  });

  return (price: number) => {
    return formatter.format(price);
  };
};

export const toCurrency = formatPrice();

export const createArray = (length: number) => [...Array(length)];
