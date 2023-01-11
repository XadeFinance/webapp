import { SafeEventEmitterProvider } from "@web3auth/base";
import ethProvider from "./ethProvider";
import solanaProvider from "./solanaProvider";

export interface IWalletProvider {
  getAccounts: () => Promise<any>;
  readAddress: () => Promise<any>;
  getBalance: () => Promise<any>;
  signAndSendTransaction: (toAddress: string, amount: string) => Promise<any>;
  getSavingInterestRate: () => Promise<any>;
  provideLiquidityToContract: () => (fromAddress: string, amount: string) => Promise<any>;
}
export const getWalletProvider = (chain: string, provider: SafeEventEmitterProvider, uiConsole: any): IWalletProvider => {
  if (chain === "solana") {
    return solanaProvider(provider, uiConsole);
  }
  return ethProvider(provider, uiConsole);
};
