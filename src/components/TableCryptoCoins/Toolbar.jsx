/* import external modules */
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Toolbar, Typography } from '@material-ui/core'

/* import internal modules */
import { useToolbarStyles } from './styles'

/** @description This is a functional component for toolbar table crypto coins
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name TableCryptoCoinsToolbar
 *  @returns {Component} Returns the toolbar table crypto coins component
 **/

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
