"use client";

import { HeaderDao } from "@aragon/ods";
import { useAragon } from "@/lib/aragon/provider";
import { useQuery } from "@tanstack/react-query";

export default function DaoHeaderClient() {
  const { baseClient } = useAragon();

  const { data } = useQuery({
    queryKey: ["dao"],
    queryFn: async () =>
      baseClient?.methods.getDao("0x3D359409D2468901F12fd93A32c3F27c0004a108"),
    enabled: !!baseClient,
  });

  console.log({ data });

  return (
    <HeaderDao
      daoName={data?.metadata?.name ?? "Loading..."}
      daoAddress={data?.address ?? "Loading..."}
      daoUrl={data?.ensDomain ?? "Loading..."}
      description={data?.metadata?.description ?? "Loading..."}
      created_at={data?.creationDate.toLocaleDateString() ?? "Loading..."}
      daoChain={"Ethereum"}
      daoType={data?.plugins[0].id ?? "Loading..."}
    />
  );
}
