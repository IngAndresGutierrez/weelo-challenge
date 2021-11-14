/**
 * return all information into rows table
 * @param   {cryptoCoin[]} coinsList Information about all coins
 */

export const transformData = (coinsList) => {
  const newRowsCoins = []
  coinsList?.forEach((coin) => {
    let newCoin = createData(
      coin.id,
      coin.symbol,
      coin.name,
      coin.rank,
      coin.price_usd,
      coin.market_cap_usd,
      coin.percent_change_24h,
      coin.percent_change_1h,
      coin.percent_change_7d,
      coin.price_btc,
      coin.volume24,
      coin.volume24a,
      coin.csupply,
      coin.tsupply,
      coin.msupply
    )

    newRowsCoins.push(newCoin)
  })

  return newRowsCoins
}

/**
 * return all information about one coin into row table
 * @param   {infoCryptoCoin} infoCryptoCoin Information about one coin
 */

const createData = (
  id,
  symbol,
  name,
  rank,
  price_usd,
  market_cap_usd,
  percent_change_24h,
  percent_change_1h,
  percent_change_7d,
  price_btc,
  volume24,
  volume24a,
  csupply,
  tsupply,
  msupply
) => {
  return {
    id,
    symbol,
    name,
    rank,
    price_usd,
    market_cap_usd,
    percent_change_24h,
    percent_change_1h,
    percent_change_7d,
    price_btc,
    volume24,
    volume24a,
    csupply,
    tsupply,
    msupply,
  }
}
