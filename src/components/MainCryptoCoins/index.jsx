/* import internal modules */
import { useEffect, useState } from 'react'

/* import internal modules */
import Loading from '../common/Loading'
import TableCryptoCoins from '../TableCryptoCoins'
import { Paper, Tab, Tabs } from '@material-ui/core'
import { getCryptoCoins } from '../../apis/cryptoCoins'
import DataGridCryptoCoins from '../DataGridCryptoCoins'

const MainCryptoCoins = () => {
  const [loading, setLoading] = useState(true)
  const [coinsList, setCoinsList] = useState([])
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    getCryptoCoinsFunction()
  }, [])

  const getCryptoCoinsFunction = () => {
    getCryptoCoins()
      .then((response) => {
        setCoinsList(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Datagrid Crypto Coins" />
          <Tab label="Table Crypto Coins" />
        </Tabs>
      </Paper>
      {!loading ? (
        <>
          {value === 0 ? (
            <DataGridCryptoCoins coinsList={coinsList} />
          ) : (
            <TableCryptoCoins coinsList={coinsList} />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default MainCryptoCoins
