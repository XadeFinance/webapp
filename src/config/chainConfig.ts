import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  chain: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://forno.celo.org/",
    blockExplorer: "https://explorer.celo.org/",
    chainId: "0xa4ec",
    displayName: "Celo Mainnet",
    ticker: "CELO",
    tickerName: "CELO",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
