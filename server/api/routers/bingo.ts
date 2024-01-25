import { z } from 'zod';

import {
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

export const bingoRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAllBingos: publicProcedure.query(({ ctx }) => {
    return ctx.db.bingo.findMany({
      orderBy: { id: 'desc' },
    });
  }),
});
