import { ADAPTER_EVENTS, SafeEventEmitterProvider, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import type { LOGIN_PROVIDER_TYPE } from "@toruslabs/openlogin";

import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { createContext, FunctionComponent, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { CHAIN_CONFIG, CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { getWalletProvider, IWalletProvider } from "./walletProvider";


var i = 0;
var done = false;


export interface IWeb3AuthContext {
  web3Auth: Web3AuthCore | null;
  provider: IWalletProvider | null;
  isLoading: boolean;
  user: unknown;
  login: (adapter: WALLET_ADAPTER_TYPE,provider: LOGIN_PROVIDER_TYPE, login_hint?: string) => Promise<void>;
  logout: () => Promise<void>;
  getUserInfo: () => Promise<any>;
  signMessage: () => Promise<any>;
  getAccounts: () => Promise<any>;
  getBalance: () => Promise<any>;
    signAndSendTransaction: (toAddress: string, amount: string) => Promise<any>;
    readAddress: () => Promise<any>;
userData: () => Promise<any>;
userPic: () => Promise<any>;
}

export const Web3AuthContext = createContext<IWeb3AuthContext>({
  web3Auth: null,
  provider: null,
  isLoading: false,
  user: null,
  login: async (adapter: WALLET_ADAPTER_TYPE, provider?: LOGIN_PROVIDER_TYPE, login_hint?: string) => {},
  logout: async () => {},
  getUserInfo: async () => {},
  signMessage: async () => {},
  getAccounts: async () => {},
  getBalance: async () => {},
    signAndSendTransaction: async () => {},
    readAddress: async () => {},
userData: async() => {},
userPic: async() => {},
});

export function useWeb3Auth() {
  return useContext(Web3AuthContext);
}

interface IWeb3AuthState {
  web3AuthNetwork: WEB3AUTH_NETWORK_TYPE;
  chain: CHAIN_CONFIG_TYPE;
}
interface IWeb3AuthProps {
  children?: ReactNode;
  web3AuthNetwork: WEB3AUTH_NETWORK_TYPE;
  chain: CHAIN_CONFIG_TYPE;
}

export const Web3AuthProvider: FunctionComponent<IWeb3AuthState> = ({ children, web3AuthNetwork, chain }: IWeb3AuthProps) => {
  const [web3Auth, setWeb3Auth] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<IWalletProvider | null>(null);
  const [user, setUser] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const setWalletProvider = useCallback(
    (web3authProvider: SafeEventEmitterProvider) => {
      const walletProvider = getWalletProvider(chain, web3authProvider, uiConsole);
      setProvider(walletProvider);
    },
    [chain]
  );

  useEffect(() => {
    const subscribeAuthEvents = (web3auth: Web3AuthCore) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Logged in!!", data);
        setUser(data);
        setWalletProvider(web3auth.provider!);
      });

      web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
        setUser(null);
      });

      web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) => {
        console.error("some error or user has cancelled login request", error);
      });
    };

    const currentChainConfig = CHAIN_CONFIG[chain];

    async function init() {
      try {
        setIsLoading(true);
        const clientId = "BKFHmCbIoeVnKWwLE0lTWa336pLqpCm6eHG6WwfwfWtAVV3BiTpO6aWFLVCWcqYTMM8IKCBQR5KHzIwmpmUYtuE";
        const web3AuthInstance = new Web3AuthCore({
          chainConfig: currentChainConfig
        });
        subscribeAuthEvents(web3AuthInstance);

        const adapter = new OpenloginAdapter({ adapterSettings: { network: web3AuthNetwork, clientId } });
        web3AuthInstance.configureAdapter(adapter);
        await web3AuthInstance.init();
        setWeb3Auth(web3AuthInstance);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, [chain, web3AuthNetwork, setWalletProvider]);

  const login = async (adapter: WALLET_ADAPTER_TYPE, loginProvider: LOGIN_PROVIDER_TYPE, login_hint?: string) => {

    try {
      setIsLoading(true);
      if (!web3Auth) {
        console.log("web3auth not initialized yet");
        uiConsole("web3auth not initialized yet")

        return;
      }
      const localProvider = await web3Auth.connectTo(adapter, { loginProvider, login_hint });
      setWalletProvider(localProvider!);
    } catch (error) {
      console.log("error");

    } finally {
      setIsLoading(false)


    }
  };

  const logout = async () => {
    if (!web3Auth) {
      console.log("web3auth not initialized yet");
      uiConsole("web3auth not initialized yet");
      return;
    }
    await web3Auth.logout();
    setProvider(null);
  };
  
/*  function getIp(url){
fetch(url).then(res => res.json());
}*/

const signAndSendTransaction = async (toAddress: string, amount: string) => {
    if (!provider) {
      console.log("provider not initialized yet");
      uiConsole("provider not initialized yet");
      return;
    }
    provider.signAndSendTransaction(toAddress, amount);
  }

const userData = async() => {
    if (!web3Auth) {
      console.log("web3auth not initialized yet");
      uiConsole("web3auth not initialized yet");
      return;
    }
  const data = await web3Auth.getUserInfo();
return data["name"];
}

const userPic = async() => {
    if (!web3Auth) {
      console.log("web3auth not initialized yet");
      uiConsole("web3auth not initialized yet");
      return;
    }
  const data = await web3Auth.getUserInfo();
return data["profileImage"];
}

  const getUserInfo = async (secret) => {

    if (!web3Auth) {
      console.log("web3auth not initialized yet");
      uiConsole("web3auth not initialized yet");
      return;
    }
    const user = await web3Auth.getUserInfo();
    getAccounts(secret);
    const json = JSON.stringify(user || {}, null, 2);
     console.log(json);
// console.log = function () {};
//   const obj = JSON.parse(json);
//    document.write("<h1 align='center'>Hey "+user.name+"!</h1>");
/*document.write("<link rel=stylesheet href='../styles/Home.module.css'>");
      document.write("<button id='mybtn' class='loggedIn'");
         document.write("<b>Click here to join the beta program!</b>");
*/     
 //document.write(" </button>");
//
//alert(user.name);  
   //  var secret= '';
   //  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //  var charactersLength = characters.length;
   //  for ( var i = 0; i < 50; i++ ) {
   //    secret += characters.charAt(Math.floor(Math.random() * charactersLength));
   // }

document.write = function () {}; 
    if(done === false)
{  
  //var request = new XMLHttpRequest();
//request.open("POST", 'https://mongo.xade.finance');
//request.send(json);
var ip = new XMLHttpRequest();
ip.open("GET","https://api.ipify.org");
ip.send('');
ip.onload = function() {
  var ipaddr = ip.response;
  var log = new XMLHttpRequest();
  var ipa = JSON.parse(`{"ip":"${ipaddr}"}`);
  var a = JSON.stringify(Object.assign({},ipa,user));
  Object.assign(user, {
        "ID": secret
});
   var s = `, "id":"${secret}"}`;
   console.log(secret);
   var all = a.slice(0,-1)+""+s;
  log.open("POST","https://mongo.api.xade.finance");  
log.send(all);
//await delay(30000);
var emailSend = new XMLHttpRequest();
emailSend.open("POST","https://email.api.xade.finance")
var em = "email="+user["email"]
emailSend.send(em)
};
      done = true;
}


//window.location.href = "https://beta.xade.finance/";
  };



  const getAccounts = async (id) => {
    if (!provider) {
      console.log("provider not initialized yet");
      uiConsole("provider not initialized yet");
      return;
    }
    provider.getAccounts(id);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      uiConsole("provider not initialized yet");
      return;
    }
    provider.getBalance();
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      uiConsole("provider not initialized yet");
      return;
    }
    provider.signMessage();
  };

  const uiConsole = (...args: unknown[]): void => {
      console.log(JSON.stringify(args || {}, null, 2));
  };

  const contextProvider = {
    web3Auth,
    provider,
    user,
    isLoading,
    login,
    logout,
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    userData,
    userPic,
    signAndSendTransaction
  };
  return <Web3AuthContext.Provider value={contextProvider}>{children}</Web3AuthContext.Provider>;
};
