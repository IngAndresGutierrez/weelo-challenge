/* import external modules */
import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff586b',
    },
    secondary: {
      main: '#212121',
    },
    action: {
      disabledBackground: '#2d3580',
      disabled: '#E5E5E5',
    },
  },
})

export default theme
