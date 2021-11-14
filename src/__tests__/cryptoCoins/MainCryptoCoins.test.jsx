/* eslint-disable jest/valid-expect */
/* import external modules */
import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

/* import internal modules */
import '../../../setupTests'
import MainCryptoCoins from '../../components/MainCryptoCoins'

describe('Testing suite MainCryptoCoins component', () => {
  const MainCryptoCoinsShallow = shallow(<MainCryptoCoins />)
  const MainCryptoCoinsMount = mount(<MainCryptoCoins />)

  test('Render MainCryptoCoins', () => {
    expect(MainCryptoCoinsShallow).toHaveLength(1)
  })

  test('Renders correctly - Snapshot', () => {
    const treeMainCryptoCoinsMount = renderer
      .create(MainCryptoCoinsMount)
      .toJSON()
    expect(treeMainCryptoCoinsMount).toMatchSnapshot()
  })

  test('Render information', () => {
    expect(MainCryptoCoinsMount.find('span').first().text()).toEqual(
      'Datagrid Crypto Coins'
    )
  })

  test('Render components', () => {
    expect(MainCryptoCoinsMount.contains('Paper'))
    expect(MainCryptoCoinsMount.contains('Tabs'))
    expect(MainCryptoCoinsMount.contains('DataGridCryptoCoins'))
    expect(MainCryptoCoinsMount.contains('TableCryptoCoins'))
  })
})
