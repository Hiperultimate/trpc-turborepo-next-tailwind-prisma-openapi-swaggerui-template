import { TRPCError, inferAsyncReturnType, initTRPC } from '@trpc/server';
import { createContext } from './context';

export type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().create();

// Middleware
const isAuthed = t.middleware(({ next, ctx }) => {
    if (!ctx.userSession) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
        });
    }

    return next({
        ctx: {
            // Infers the `userSession` as non-nullable
            userSession: ctx.userSession,
        }
    })
})

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed)