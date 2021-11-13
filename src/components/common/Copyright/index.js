/* import external modules */
import { Typography } from '@material-ui/core'

const Copyright = () => {
  const currentDate = new Date().getFullYear()

  return (
    <Typography
      align="center"
      variant="body2"
      color="textSecondary"
      style={{ marginBottom: 40 }}
    >
      {'Copyright © Weelo Challenge '}
      {currentDate}
      {'. '}
      {'All rights reserved.'}
    </Typography>
  )
}

export default Copyright
