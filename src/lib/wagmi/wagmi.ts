import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { polygon, polygonMumbai } from "viem/chains";

export const config = createConfig(
    getDefaultConfig({
        // Required API Keys
        alchemyId: env.NEXT_PUBLIC_ALCHEMY_API_KEY,
        infuraId: env.NEXT_PUBLIC_INFURA_API_KEY,
        walletConnectProjectId: env.NEXT_PUBLIC_WALLET_CONNECT_ID,

        // Required
        appName: siteConfig.name,

        // Optional
        appDescription: siteConfig.description,
        appUrl: siteConfig.url, // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
        chains: [polygon, polygonMumbai]
    }),
);
