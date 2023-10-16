"use client";
import { useState } from "react";
import { Tag } from "@aragon/ods";

import { trpc } from "../_trpc/client";
import { serverClient } from "../_trpc/serverClient";

export default function StuffClient({
  initialStuff,
}: {
  initialStuff: Awaited<ReturnType<(typeof serverClient)["getSomeNumbers"]>>;
}) {
  // The getTodos hook is still used in the TodoList component because it provides additional functionality
  // beyond just fetching the data. For example, it provides a refetch method, which is used to refetch the
  // todos when a new todo is added or when a todo's status is changed.
  const stuff = trpc.getSomeNumbers.useQuery(undefined, {
    initialData: initialStuff,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  //   stuff.refetch();

  return (
    <div>
      <div className="text-black my-5 text-3xl">
        {/* {initialStuff?.map((x) => ( */}
        {/* we could just render initial stuff here, but if this ever changes because of some action like 
            creating anopther budget when that settles we can refetch. so we get the best of both worlds
            initial page loads but still dynamic  */}
        {stuff?.data?.map((x) => (
          <div key={x} className="flex gap-3 items-center">
            {x}
          </div>
        ))}
        <Tag colorScheme="primary" label="My label"></Tag>
      </div>
    </div>
  );
}
