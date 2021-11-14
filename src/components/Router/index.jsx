/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* import internal modules */
import Loading from '../common/Loading'
const LazyPageNotFound = lazy(() => import('../../views/notFound'))
const LazyMainCryptoCoins = lazy(() => import('../../views/mainCryptoCoins'))

/** @description This is a functional component for main router app
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Router
 *  @returns {Component} Returns the main router component
 **/

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazyMainCryptoCoins />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterComponent
