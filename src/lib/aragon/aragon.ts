import { Context, ContextParams, LIVE_CONTRACTS, SupportedVersion } from "@aragon/sdk-client-common";
import { Client, TokenVotingClient } from "@aragon/sdk-client";
import { env } from "../../env.mjs";
import { CHAIN_METADATA, SUBGRAPH_API_URL, findNetworkKeyById, translateToNetworkishName } from "../../config/chains";
import { type Signer } from "ethers";





export function aragonClients(chainId: number, signer?: Signer) {
    const translatedNetwork = translateToNetworkishName(
        findNetworkKeyById(chainId)
    );
    if (translatedNetwork === "unsupported") return { context: undefined, client: undefined, tokenVotingClient: undefined }
    const contextParams: ContextParams = {
        daoFactoryAddress:
            LIVE_CONTRACTS[SupportedVersion.LATEST][translatedNetwork]
                .daoFactoryAddress,
        network: translatedNetwork,
        signer,
        web3Providers: CHAIN_METADATA[findNetworkKeyById(chainId)].rpc[0],
        graphqlNodes: [{ url: SUBGRAPH_API_URL[findNetworkKeyById(chainId)]! }],
        ipfsNodes: [
            {
                url: `${CHAIN_METADATA[findNetworkKeyById(chainId)].ipfs}/api/v0`,
                headers: { "X-API-KEY": env.NEXT_PUBLIC_IPFS_API_KEY },
            },
        ],
    };

    const context: Context = new Context(contextParams);
    const client: Client = new Client(context);
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(context);

    return { context, client, tokenVotingClient }
}