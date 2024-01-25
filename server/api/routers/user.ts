import { z } from 'zod';
import { db } from '@/server/db';
import {
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

export const userRouter = createTRPCRouter({
  signIn: publicProcedure
    .input(
      z.object({
        nickname: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation((req) => {
      const signInUser = db.user.create({
        data: {
          nickname: req.input.nickname,
          email: req.input.email,
          password: req.input.password,
        },
      });
      return signInUser;
    }),
});
