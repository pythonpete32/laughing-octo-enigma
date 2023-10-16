"use client";

import { HeaderDao } from "@aragon/ods";
import { serverClient } from "../_trpc/serverClient";

type DaoHeaderType = {
  dao: Awaited<ReturnType<(typeof serverClient)["getDao"]>>;
};

export default function DaoHeader({ dao }: DaoHeaderType) {
  if (!dao) return null;

  return (
    <HeaderDao
      daoName={dao.metadata?.name}
      daoAddress={dao.address}
      daoUrl={dao.ensDomain}
      description={dao.metadata?.description}
      created_at={dao.creationDate.toLocaleDateString()}
      daoChain={"Ethereum"}
      daoType={dao.plugins[0].id}
    />
  );
}
