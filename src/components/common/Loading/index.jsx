/* import external modules */
import { CircularProgress } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

/** @description This is a functional component for loading
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Loading
 *  @returns {Component} Returns the loading component
 **/

const Loading = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" {...props} />
    </div>
  )
}

export default Loading
