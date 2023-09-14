import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";
import { createContext } from "./context";

export type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();
