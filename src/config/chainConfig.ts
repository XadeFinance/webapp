import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  chain: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "http://45.79.181.218:8080/",
    blockExplorer: "https://explorer-liberty20.shardeum.org",
    chainId: "0x1f91",
    displayName: "Shardeum Liberty 20 Testnet",
    ticker: "SHM",
    tickerName: "SHM",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
