import { t } from "../trpc";
import { z } from "zod";

export const exampleRouter = t.router({
    // http://localhost:3002/api/example.exampleApi
    exampleApi: t.procedure.query(() => {
        return { message: "Sending message from route" };
    }),

    // http://localhost:3002/api/example.exampleApi?Something
    exampleInput: t.procedure.input(z.string()).query((opts) => {
        opts.input; // string
        return { id: opts.input, name: 'Bilbo' };
    }),
});