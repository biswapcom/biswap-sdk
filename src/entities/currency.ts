import JSBI from 'jsbi'

import { SolidityType, ChainId } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol: string
  public readonly name: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'BNB', 'Binance')

  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'Matic')

  public static readonly NATIVE = {
    [ChainId.MAINNET]: Currency.ETHER,
    [ChainId.BSCTESTNET]: Currency.ETHER,
    [ChainId.MATIC]: Currency.MATIC,
    [ChainId.MATIC_TESTNET]: Currency.MATIC
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol: string, name: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static getNativeCurrency(chainId?: ChainId):Currency {
    if (!chainId) {
      throw Error(`No chainId ${chainId}`)
    }

    if (!(chainId in Currency.NATIVE)) {
      throw Error(`No native currency defined for chainId ${chainId}`)
    }
    return Currency.NATIVE[chainId]
  }

  public static getNativeCurrencySymbol(chainId?: ChainId):string {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.symbol
  }

  public static getNativeCurrencyName(chainId?: ChainId):string {
    const nativeCurrency = this.getNativeCurrency(chainId)
    return nativeCurrency.name
  }

  public getSymbol(chainId?: ChainId):string {
    if (!chainId) {
      return this.symbol
    }

    if (this?.symbol === 'ETH') {
      return Currency.getNativeCurrencySymbol(chainId)
    }

    return this.symbol
  }

  public getName(chainId?: ChainId):string {
    if (!chainId) {
      return this.name
    }

    if (this?.name === 'Ether') {
      return Currency.getNativeCurrencyName(chainId)
    }

    return this.name
  }

}

const NATIVE  = Currency.ETHER
export { NATIVE }
