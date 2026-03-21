/**
 * Formats cents into a standard 0.00 string
 * @param {number} priceCents
 */
export function formatCurrency(priceCents) {
  return `$${(Math.round(priceCents) / 100).toFixed(2)}`;
}

/**
 * Calculates Ontario HST (13%) and returns formatted cents
 * @param {number} priceCents
 */
export function calculateTax(priceCents) {
  const taxRate = 0.13; // 13% HST for Ontario
  const taxCents = priceCents * taxRate;
  return formatCurrency(taxCents);
}

export default formatCurrency;
