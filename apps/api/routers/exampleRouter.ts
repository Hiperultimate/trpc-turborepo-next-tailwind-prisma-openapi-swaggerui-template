import { t } from "../trpc";
import { z } from "zod";

export const exampleRouter = t.router({
    // http://localhost:3002/api/example.exampleApi
    exampleApi: t.procedure.query(() => {
        return { message: "Sending message from route" };
    }),

    // http://localhost:3002/api/example.exampleInput?input="1234"
    exampleInput: t.procedure.input(z.string()).query((req) => {
        req.input; // string
        return { id: req.input, name: 'Bilbo' };
    }),
});