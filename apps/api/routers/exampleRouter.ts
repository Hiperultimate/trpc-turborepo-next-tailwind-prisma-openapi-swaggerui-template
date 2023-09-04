import { t, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const exampleRouter = t.router({
    // http://localhost:3002/api/example.exampleApi
    exampleApi: publicProcedure.query(() => {
        return { message: "Sending message from route" };
    }),

    // http://localhost:3002/api/example.exampleInput?input="1234"
    exampleInput: publicProcedure.input(z.string()).query((req) => {
        // return { id: req.input, name: 'Bilbo'};

        // Add context in context.ts file and call it using req.ctx
        return { id: req.input, name: 'Bilbo', hasSession: req.ctx.userSession };
    }),

    // Change userSession to true / false and try this procedure
    protectedExample: protectedProcedure.query(({ ctx }) => {
        return { context: ctx.userSession, message : "Protected example message" }
    })
});