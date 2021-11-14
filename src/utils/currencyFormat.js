/**
 * return value currency format
 * @param   {number} amount Value for format
 */

export const addCurrencyFormatUsd = (amount) => {
  const optionCurrencyUSD = { style: 'currency', currency: 'USD' }
  const numberPriceUsdFormat = new Intl.NumberFormat('en-US', optionCurrencyUSD)
  const priceUsdFormat = numberPriceUsdFormat.format(amount)

  return priceUsdFormat
}

/**
 * return value currency format without dollar symbol
 * @param   {number} amount Value for format
 */
export const addCurrencyFormatUsdWithoutDollarSymbol = (amount) => {
  const optionCurrencyUSD = { currency: 'USD' }
  const numberPriceUsdFormat = new Intl.NumberFormat('en-US', optionCurrencyUSD)
  const priceUsdFormat = numberPriceUsdFormat.format(amount)

  return priceUsdFormat
}
