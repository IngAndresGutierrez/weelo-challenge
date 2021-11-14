/* import external modules */
import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

/* import internal modules */
import '../../../setupTests'
import DetailCryptoCoins from '../../components/DetailCryptoCoins'

const informationCoin = {
  csupply: '18851540.00',
  id: '90',
  market_cap_usd: '1220750619767.60',
  msupply: '21000000',
  name: 'Bitcoin',
  nameid: 'bitcoin',
  percent_change_1h: '0.23',
  percent_change_7d: '6.51',
  percent_change_24h: '1.65',
  price_btc: '1.00',
  price_usd: '64756.02',
  rank: 1,
  symbol: 'BTC',
  tsupply: '18851540',
  volume24: 22726854213.71473,
  volume24a: 27873040814.98264,
}

describe('Testing suite DetailCryptoCoins component', () => {
  const DetailCryptoCoinsShallow = shallow(<DetailCryptoCoins />)
  const DetailCryptoCoinsMount = mount(
    <DetailCryptoCoins informationCoin={informationCoin} />
  )

  test('Render DetailCryptoCoins', () => {
    expect(DetailCryptoCoinsShallow).toHaveLength(1)
  })

  test('Renders correctly - Snapshot', () => {
    const treeDetailCryptoCoinsMount = renderer
      .create(DetailCryptoCoinsMount)
      .toJSON()
    expect(treeDetailCryptoCoinsMount).toMatchSnapshot()
  })

  test('Render information', () => {
    expect(DetailCryptoCoinsMount.find('span').first().text()).toEqual('BTC')
    expect(DetailCryptoCoinsMount.find('span').at(2).text()).toEqual('1')
    expect(DetailCryptoCoinsMount.find('span').at(3).text()).toEqual(
      '$64,756.02'
    )
    expect(DetailCryptoCoinsMount.find('span').at(4).text()).toEqual('1.65')
    expect(DetailCryptoCoinsMount.find('span').at(5).text()).toEqual('0.23')
  })
})
