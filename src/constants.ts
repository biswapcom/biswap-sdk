import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97,
  MATIC = 137,
  MATIC_TESTNET = 80001
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}


export const Contracts: { [chainId in ChainId]: any} = {
  [ChainId.MATIC]: {
    factory: '0x2A6332210b992734a1B311Bfe65Ef308225e91Ac',
    init_code: '0x0f6f23c3e29a036281cb79da4fe87e549e2af18c5d2d130c03b5ab8ecced648c'
  },
  [ChainId.MATIC_TESTNET]: {
    factory: '0x2A6332210b992734a1B311Bfe65Ef308225e91Ac',
    init_code: '0x0f6f23c3e29a036281cb79da4fe87e549e2af18c5d2d130c03b5ab8ecced648c'
  },
  [ChainId.BSCTESTNET]: {
    factory: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
    init_code: '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf'
  },
  [ChainId.MAINNET]: {
    factory: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
    init_code: '0xfea293c909d87cd4153593f077b76bb7e94340200f4ee84211ae8e4f9bd7ffdf'
  },
}


export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(999)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
