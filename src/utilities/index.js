// @flow
const upToDecimalPoints = 2;

export const getPrice = (price: number) => `$${price.toFixed(upToDecimalPoints)}`;
