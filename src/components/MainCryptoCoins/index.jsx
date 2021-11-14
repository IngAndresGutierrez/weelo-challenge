/* import internal modules */
import { useEffect, useState } from 'react'

/* import internal modules */
import Loading from '../common/Loading'
import TableCryptoCoins from '../TableCryptoCoins'
import { Paper, Tab, Tabs } from '@material-ui/core'
import { getCryptoCoins } from '../../apis/cryptoCoins'
import DataGridCryptoCoins from '../DataGridCryptoCoins'
import { cryptoCoinsList } from '../../utils/cryptoCoinsList'

/** @description This is a functional component for layout cryptocurreny coins
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MainCryptoCoins
 *  @returns {Component} Returns the layout of cryptocurreny coins component
 **/

const MainCryptoCoins = () => {
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(true)
  const [coinsList, setCoinsList] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    getCryptoCoinsFunction()
  }, [])

  const getCryptoCoinsFunction = () => {
    getCryptoCoins()
      .then((response) => {
        /* request success */
        if (response.status >= 200 && response.status <= 299) {
          setCoinsList(response.data.data)
          setLoading(false)
        }

        /* if there are any errors in the api server (only for this challenge) */
        if (response.status > 299) {
          setCoinsList(cryptoCoinsList)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)

        /* if there are any errors in the api server (only for this challenge) */
        if (error) {
          setCoinsList(cryptoCoinsList)
          setLoading(false)
        }
      })
  }

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          onChange={handleChange}
          indicatorColor="primary"
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
