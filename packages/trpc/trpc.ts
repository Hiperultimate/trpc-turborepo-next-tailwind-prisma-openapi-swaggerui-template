import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./context";
import { OpenApiMeta } from "trpc-openapi";

export type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();
