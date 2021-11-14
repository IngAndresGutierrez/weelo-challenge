/* import external modules */
import { List, ListItem, ListItemText } from '@material-ui/core'

/* import internal modules */
import { useStyles } from './styles'
import {
  addCurrencyFormatUsd,
  addCurrencyFormatUsdWithoutDollarSymbol,
} from '../../utils/currencyFormat'

/** @description This is a functional component for detail about cryptocurreny coins
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DetailCryptoCoins
 *  @returns {Component} Returns the detail about cryptocurreny coins component
 **/

const DetailCryptoCoins = ({ informationCoin }) => {
  const classes = useStyles()

  const renderDetailCryptoCoin = (
    <>
      <ListItem divider>
        <ListItemText secondary={`Symbol 🡢`} />
        <ListItemText primary={`${informationCoin?.symbol}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Name 🡢`} />
        <ListItemText primary={`${informationCoin?.name}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Rank 🡢`} />
        <ListItemText primary={`${informationCoin?.rank}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Price USD 🡢  `} />
        <ListItemText
          primary={`${addCurrencyFormatUsd(informationCoin?.price_usd)}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`% Change 24h 🡢`} />
        <ListItemText primary={`${informationCoin?.percent_change_24h}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`% Change 1h 🡢`} />
        <ListItemText primary={`${informationCoin?.percent_change_1h}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`% Change 7D 🡢`} />
        <ListItemText primary={`${informationCoin?.percent_change_7d}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Price BTC 🡢`} />
        <ListItemText primary={`${informationCoin?.price_btc}`} />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Market Cap USD 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsd(informationCoin?.market_cap_usd)}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Volume24 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsdWithoutDollarSymbol(
            informationCoin?.volume24
          )}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Volume24A 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsdWithoutDollarSymbol(
            informationCoin?.volume24a
          )}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Csupply 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsdWithoutDollarSymbol(
            informationCoin?.csupply
          )}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Tsupply 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsdWithoutDollarSymbol(
            informationCoin?.tsupply
          )}`}
        />
      </ListItem>
      <ListItem divider>
        <ListItemText secondary={`Msupply 🡢`} />
        <ListItemText
          primary={`${addCurrencyFormatUsdWithoutDollarSymbol(
            informationCoin?.msupply
          )}`}
        />
      </ListItem>
    </>
  )

  return (
    <List component="nav" className={classes.root} aria-label="detail coins">
      {renderDetailCryptoCoin}
    </List>
  )
}

export default DetailCryptoCoins
