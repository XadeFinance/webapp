import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  chain: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://alfajores-forno.celo-testnet.org",
    blockExplorer: "https://alfajores-blockscout.celo-testnet.org",
    chainId: "0xaef3",
    displayName: "Celo Testnet",
    ticker: "CELO",
    tickerName: "CELO",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
