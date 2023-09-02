import express from 'express';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import { z } from 'zod';


const port: number = 3002 as const;

// created for each request
const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;


export const t = initTRPC.context<Context>().create();;

const appRouter = t.router({
    sendHi: t.procedure.query(() => {
        return "Hi";
    }),
    getUser: t.procedure.input(z.string()).query((opts) => {
        opts.input; // string
        return { id: opts.input, name: 'Bilbo' };
    }),
    // createUser: t.procedure
    //     .input(z.object({ name: z.string().min(5) }))
    //     .mutation(async (opts) => {
    //         // use your ORM of choice
    //         return await UserModel.create({
    //             data: opts.input,
    //         });
    //     }),
});

// Initialize the express engine
const app: express.Application = express();

app.use(cors());

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

// Handling '/' Request
app.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

// Server setup
app.listen(port, () => {
    console.log(`started server on [::]:${port}, url: http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;