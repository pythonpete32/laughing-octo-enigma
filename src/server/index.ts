import { z } from "zod";

import { publicProcedure, router } from "./trpc";
import { getClients } from "@/lib/aragon";


const { client } = getClients(1);


export const appRouter = router({
  getSomeNumbers: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),

  getMoreNumbers: publicProcedure.input(z.number()).query(async (number) => {
    return Array.from({ length: Number(number.input) }, () => Math.floor(Math.random() * Number(number.input)));
  }),

  getDao: publicProcedure.query(async () => {
    return await client?.methods.getDao("0x3D359409D2468901F12fd93A32c3F27c0004a108");
    // return await client?.methods.getDao("the.dao.eth"); <-- this is not working
  }),

});

export type AppRouter = typeof appRouter;
