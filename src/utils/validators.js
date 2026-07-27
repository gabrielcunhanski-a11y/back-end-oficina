const onlyDigits = (value) => String(value).replace(/\D/g, '');

export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidCPF = (cpf) => {
  const digits = onlyDigits(cpf);
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i += 1) sum += Number(digits[i]) * (10 - i);
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== Number(digits[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i += 1) sum += Number(digits[i]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  return remainder === Number(digits[10]);
};

export const isValidCNPJ = (cnpj) => {
  const digits = onlyDigits(cnpj);
  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

  const calcVerifier = (baseDigits, weights) => {
    let sum = 0;
    baseDigits.split("").forEach((digit, index) => {
      sum += Number(digit) * weights[index];
    });

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstBase = digits.slice(0, 12);
  const firstVerifier = calcVerifier(firstBase, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const secondBase = `${firstBase}${firstVerifier}`;
  const secondVerifier = calcVerifier(secondBase, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

  return Number(digits[12]) === firstVerifier && Number(digits[13]) === secondVerifier;
};
