"use client";

import { ConnectKitProvider } from "connectkit";

import { FC, ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { config } from "./wagmi";

const WagmiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="rounded">{children}</ConnectKitProvider>
    </WagmiConfig>
  );
};
export default WagmiProvider;
