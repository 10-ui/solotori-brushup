import { bingoRouter } from '@/server/api/routers/bingo';
import { userRouter } from '@/server/api/routers/user';
import { createTRPCRouter } from '@/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  bingo: bingoRouter,
  signInUser: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
