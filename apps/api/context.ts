import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';

// created for each request
export const createContext = ({ req, res }: CreateExpressContextOptions) => {
    // return { } // No Context

    // Example context
    // Hardcoding userSession, normally you would call getSession from something like nextAuth to populate this
    // Check ./routers/exampleInput.exampleInput
    return { userSession: true }
};