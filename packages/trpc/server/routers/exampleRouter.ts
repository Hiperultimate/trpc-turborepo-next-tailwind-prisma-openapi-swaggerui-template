import { z } from "zod";
import { protectedProcedure, publicProcedure } from "../procedures";
import { t } from "../trpc";

export const exampleRouter = t.router({
  // http://localhost:3002/api/example.exampleApi
  exampleApi: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/example.exampleApi",
        tags: ["example"],
        description: "Calling exampleApi",
      },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .query(() => {
      return { message: "Sending message from route" };
    }),

  // http://localhost:3002/api/example.exampleInput?id=123123
  exampleInput: publicProcedure
    .meta({ openapi: { method: "GET", path: "/example.exampleInput", tags: ["example"] } })
    .input(z.object({ id: z.string() }))
    .output(z.object({ id: z.string(), name: z.string(), hasSession: z.boolean() }))
    .query(({ input, ctx }) => {
      // return { id: req.input, name: 'Bilbo'};

      // Add context in context.ts file and call it using req.ctx
      return { id: input.id, name: "Bilbo", hasSession: ctx.userSession };
    }),

  superSimple: publicProcedure
    .meta({ openapi: { method: "POST", path: "/example.superSimple", tags: ["example"] } })
    .input(z.object({ simpleInput: z.string() }))
    .output(z.object({ givenString: z.string() }))
    .mutation(({ input }) => {
      return { givenString: input.simpleInput };
    }),

  // Change userSession to true / false in /context.ts for this procedure to work
  protectedExample: protectedProcedure
    .meta({ openapi: { method: "GET", path: "/example.protectedExample", tags: ["example"] } })
    .input(z.void())
    .output(z.object({ context: z.boolean(), message: z.string() }))
    .query(({ ctx }) => {
      return { context: ctx.userSession, message: "Protected example message" };
    }),
});
