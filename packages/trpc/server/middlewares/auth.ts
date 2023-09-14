import { TRPCError } from "@trpc/server";
import { t } from "../trpc";

// Middleware
export const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.userSession) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    ctx: {
      // Infers the `userSession` as non-nullable
      userSession: ctx.userSession,
    },
  });
});
