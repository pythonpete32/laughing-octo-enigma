import { serverClient } from "../lib/trpc/serverClient";

import DaoHeader from "./_components/DaoHeader";
import DaoHeaderClient from "./_components/DaoHeaderClient";
import { ConnectKitButton } from "./_components/ConnectButton";

export default async function Home() {
  const dao = await serverClient.getDao();

  return (
    <main className="max-w-3xl mx-auto mt-5">
      <ConnectKitButton />
      <DaoHeader dao={dao} />
      <DaoHeaderClient />
    </main>
  );
}
