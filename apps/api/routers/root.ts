import { t } from "../trpc";
import { exampleRouter } from "./exampleRouter";

// Create routes in /routers and add them in appRouter/index.ts
export const appRouter = t.router({

    // Add new routes here
    example: exampleRouter
});

export type AppRouter = typeof appRouter;