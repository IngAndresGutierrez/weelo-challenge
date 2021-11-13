/* import external modules */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* import internal modules */
const LazyMainCryptoCoins = lazy(() => import('../../views/mainCryptoCoins'))
const LazyPageNotFound = lazy(() => import('../../views/notFound'))

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<LazyMainCryptoCoins />} />
          <Route path="*" element={<LazyPageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RouterComponent
