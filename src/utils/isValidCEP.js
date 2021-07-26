export const cepMask = (value) => {
  return value
    .replace(/\D/g, '') // replace whatever character that is not a number for nothing
    .replace(/(\d{5})(\d{3})/, '$1-$2') //capture 2 groups there is a number, the first of 3 and the second of 2, after this, capture the first group and add a hairline before the second group
    .replace(/(-\d{3})\d+?$/, '$1'); // capture 3 numbers followed by a hairline and don't let typing  anymore
};
