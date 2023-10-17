import { serverClient } from "../lib/trpc/serverClient";

import DaoHeader from "./_components/DaoHeader";

export default async function Home() {
  const dao = await serverClient.getDao();

  return (
    <main className="max-w-3xl mx-auto mt-5">
      <DaoHeader dao={dao} />
    </main>
  );
}
