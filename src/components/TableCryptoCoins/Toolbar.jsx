/* import external modules */
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Toolbar, Typography } from '@material-ui/core'

/* import internal modules */
import { useToolbarStyles } from './styles'

const TableCryptoCoinsToolbar = () => {
  const classes = useToolbarStyles()

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        className={classes.title}
      >
        Cypto Coins List
      </Typography>
    </Toolbar>
  )
}

TableCryptoCoinsToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

export default TableCryptoCoinsToolbar
