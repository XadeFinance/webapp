export const WEB3AUTH_NETWORK = {
  mainnet: {
    displayName: "Mainnet",
  }
} as const;

export type WEB3AUTH_NETWORK_TYPE = keyof typeof WEB3AUTH_NETWORK;
