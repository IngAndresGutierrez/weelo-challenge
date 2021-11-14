/* eslint-disable jest/valid-expect */
/* import external modules */
import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

/* import internal modules */
import '../../../setupTests'
import TableCryptoCoins from '../../components/TableCryptoCoins'

describe('Testing suite TableCryptoCoins component', () => {
  const TableCryptoCoinsShallow = shallow(<TableCryptoCoins />)
  const TableCryptoCoinsMount = mount(<TableCryptoCoins />)

  test('Render TableCryptoCoins', () => {
    expect(TableCryptoCoinsShallow).toHaveLength(1)
  })

  test('Renders correctly - Snapshot', () => {
    const treeTableCryptoCoinsMount = renderer
      .create(TableCryptoCoinsMount)
      .toJSON()
    expect(treeTableCryptoCoinsMount).toMatchSnapshot()
  })

  test('Render information', () => {
    expect(TableCryptoCoinsMount.find('span').first().text()).toEqual('Symbol')
    expect(TableCryptoCoinsMount.find('span').at(2).text()).toEqual(
      'Ranksorted ascending'
    )
  })

  test('Render components', () => {
    expect(TableCryptoCoinsMount.contains('Paper'))
    expect(TableCryptoCoinsMount.contains('TableCryptoCoinsToolbar'))
    expect(TableCryptoCoinsMount.contains('AlertDialog'))
  })
})
