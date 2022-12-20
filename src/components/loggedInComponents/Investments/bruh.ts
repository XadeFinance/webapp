import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  celo: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://polygon-rpc.com/",
    blockExplorer: "https://polygonscan.com",
    chainId: "0x89",
    displayName: "Polygon",
    ticker: "MATIC",
    tickerName: "MATIC",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;