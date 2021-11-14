/* import internal modules */
import MiniDrawer from '../components/common/Drawer'
import Copyright from '../components/common/Copyright'
import MainCryptoCoins from '../components/MainCryptoCoins'

/** @description This is a functional component main view about crypto coins
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MainCryptoCoinsView
 *  @returns {Component} Returns the main view about crypto coins component view
 **/

const MainCryptoCoinsView = () => {
  return (
    <MiniDrawer>
      <MainCryptoCoins />
      <Copyright />
    </MiniDrawer>
  )
}

export default MainCryptoCoinsView
