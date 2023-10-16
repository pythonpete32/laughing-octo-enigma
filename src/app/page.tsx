import { serverClient } from "./_trpc/serverClient";
import StuffClient from "./_components/StuffClient";
import DaoHeader from "./_components/DaoHeader";

export default async function Home() {
  const dao = await serverClient.getDao();
  const someStuff = await serverClient.getSomeNumbers();

  return (
    <main className="max-w-3xl mx-auto mt-5">
      <DaoHeader dao={dao} />
      <StuffClient initialStuff={someStuff} />
    </main>
  );
}
