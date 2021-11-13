import axios from 'axios'

const BASE_URL = 'https://api.coinlore.net/api/tickers/'

export const getCryptoCoins = () => {
  return axios.get(BASE_URL)
}
