/* import internal modules */
import '../../../setupTests'
import {
  addCurrencyFormatUsd,
  addCurrencyFormatUsdWithoutDollarSymbol,
} from '../../utils/currencyFormat'

describe('Testing suite Currency Format', () => {
  const value = '64756.02'

  test('Check correct format', () => {
    const valueFormat = addCurrencyFormatUsd(value)
    expect(valueFormat).toEqual('$64,756.02')
  })

  test('Check correct format without dollar symbol', () => {
    const valueFormat = addCurrencyFormatUsdWithoutDollarSymbol(value)
    expect(valueFormat).toEqual('64,756.02')
  })
})
