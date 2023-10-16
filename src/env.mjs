import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1),
    NEXT_PUBLIC_WALLET_CONNECT_ID: z.string().min(1),
    NEXT_PUBLIC_INFURA_API_KEY: z.string().min(1),
    NEXT_PUBLIC_ETHERSCAN_API_KEY: z.string().min(1),
    NEXT_PUBLIC_POLYGONSCAN_API_KEY: z.string().min(1),
    NEXT_PUBLIC_IPFS_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_WALLET_CONNECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
    NEXT_PUBLIC_INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    NEXT_PUBLIC_ETHERSCAN_API_KEY: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
    NEXT_PUBLIC_POLYGONSCAN_API_KEY:
      process.env.NEXT_PUBLIC_POLYGONSCAN_API_KEY,
    NEXT_PUBLIC_IPFS_API_KEY: process.env.NEXT_PUBLIC_IPFS_API_KEY,
  },
});
