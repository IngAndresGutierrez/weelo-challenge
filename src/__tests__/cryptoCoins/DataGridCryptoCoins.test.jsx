/* import external modules */
import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

/* import internal modules */
import '../../../setupTests'
import { cryptoCoinsList } from '../../utils/cryptoCoinsList'
import DataGridCryptoCoins from '../../components/DataGridCryptoCoins'

describe('Testing suite DataGridCryptoCoins component', () => {
  const DataGridCryptoCoinsShallow = shallow(<DataGridCryptoCoins />)
  const DataGridCryptoCoinsMount = mount(
    <DataGridCryptoCoins coinsList={cryptoCoinsList} />
  )

  test('Render DataGridCryptoCoins', () => {
    expect(DataGridCryptoCoinsShallow).toHaveLength(1)
  })

  test('Renders correctly - Snapshot', () => {
    const treeDataGridCryptoCoinsMount = renderer
      .create(DataGridCryptoCoinsMount)
      .toJSON()
    expect(treeDataGridCryptoCoinsMount).toMatchSnapshot()
  })

  test('Render texts in Toolbar', () => {
    expect(DataGridCryptoCoinsMount.find('span').first().text()).toEqual(
      'Columns'
    )
  })

  test('Render data from crypto coins list', () => {
    // console.log(DataGridCryptoCoinsMount.debug()) /* Debug */
    expect(DataGridCryptoCoinsMount.find('div').at(16).text()).toEqual('Name')
    expect(DataGridCryptoCoinsMount.find('div').at(36).text()).toEqual(
      '1-5 of 100'
    )
  })
})
