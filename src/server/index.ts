import { z } from "zod";

import { publicProcedure, router } from "./trpc";





export const appRouter = router({
  getSomeNumbers: publicProcedure.query(async () => {
    return [1, 2, 3];
  }),

  getMoreNumbers: publicProcedure.input(z.number()).query(async (number) => {
    return Array.from({ length: Number(number.input) }, () => Math.floor(Math.random() * Number(number.input)));
  }),

});

export type AppRouter = typeof appRouter;
