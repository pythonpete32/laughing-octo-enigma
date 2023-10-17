"use client";

import useWindowSigner from "@/hooks/useWindowSigner";
import { Client, Context, TokenVotingClient } from "@aragon/sdk-client";

import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  FC,
} from "react";
import { useNetwork } from "wagmi";
import { aragonClients } from "./aragon";

export interface AragonSDKContextValue {
  context?: Context;
  baseClient?: Client;
  tokenVotingClient?: TokenVotingClient;
}

const AragonSDKContext = createContext<AragonSDKContextValue>({});

const AragonProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { signer: walletClient } = useWindowSigner();
  const { chain } = useNetwork();
  const [context, setContext] = useState<Context | undefined>(undefined);
  const [baseClient, setBaseClient] = useState<Client | undefined>(undefined);
  const [tokenVotingClient, setTokenVotingClient] = useState<
    TokenVotingClient | undefined
  >(undefined);

  useEffect(() => {
    if (!walletClient || !chain) return;

    const { client, context, tokenVotingClient } = aragonClients(
      chain.id,
      walletClient
    );

    setBaseClient(client);
    setTokenVotingClient(tokenVotingClient);
    setContext(context);
  }, [walletClient, chain]);

  return (
    <AragonSDKContext.Provider
      value={{
        context,
        baseClient,
        tokenVotingClient,
      }}
    >
      {children}
    </AragonSDKContext.Provider>
  );
};

export function useAragon(): AragonSDKContextValue {
  const context = useContext(AragonSDKContext);
  if (!context)
    throw new Error("useAragon hooks must be used within an AragonSDKWrapper");
  return context;
}

export default AragonProvider;
