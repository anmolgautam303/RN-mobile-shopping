const upToDecimalPoints = 2;

export const getPrice = price => `$${price.toFixed(upToDecimalPoints)}`;
