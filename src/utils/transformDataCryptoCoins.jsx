export const transformData = (coinsList) => {
  const newRowsCoins = []
  coinsList?.forEach((coin) => {
    let newCoin = createData(
      coin.symbol,
      coin.name,
      coin.rank,
      coin.price_usd,
      coin.market_cap_usd
    )

    newRowsCoins.push(newCoin)
  })

  return newRowsCoins
}

const createData = (symbol, name, rank, price_usd, market_cap_usd) => {
  return { symbol, name, rank, price_usd, market_cap_usd }
}
