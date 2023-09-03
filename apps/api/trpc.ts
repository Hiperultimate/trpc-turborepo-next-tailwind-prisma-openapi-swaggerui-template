import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

// created for each request
export const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context


export const t = initTRPC.context<Context>().create();
export type Context = inferAsyncReturnType<typeof createContext>;