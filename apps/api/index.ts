import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import express from 'express';
import { createContext } from "./trpc";
import { appRouter } from "./routers/index";


const port: number = 3002 as const;

// Initialize the express engine
const app: express.Application = express();

app.use(cors());

app.use(
    '/api',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

// Server setup
app.listen(port, () => {
    console.log(`started server on [::]:${port}, url: http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;