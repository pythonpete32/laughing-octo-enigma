import { serverClient } from "./_trpc/serverClient";

// import TodoList from "./_components/TodoList";
import StuffClient from "./_components/StuffClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  // const todos = await serverClient.getTodos();
  const dao = await serverClient.getDao();
  // console.log(dao);

  // 1. Get Data from the server
  const someStuff = await serverClient.getSomeNumbers();
  const x = "s";
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <h1 className="text-3xl font-bold">{x}</h1>
      <StuffClient initialStuff={someStuff} />
    </main>
  );
}
