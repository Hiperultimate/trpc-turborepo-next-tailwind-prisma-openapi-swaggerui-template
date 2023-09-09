import * as trpcExpress from '@trpc/server/adapters/express';
import cors from "cors";
import express from 'express';
import { createContext } from "./context";
import { appRouter } from "./routers/root";

import swaggerUi from 'swagger-ui-express';

import { createOpenApiExpressMiddleware } from 'trpc-openapi';
import { openApiDocument } from './openapi';

const port: number = 3002 as const;

// Initialize the express engine
const app: express.Application = express();

app.use(cors());

// Handle incoming tRPC requests
app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

// Handle incoming OpenAPI requests
app.use('/api', createOpenApiExpressMiddleware({ router: appRouter, createContext }));

// Serve Swagger UI with our OpenAPI schema
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(openApiDocument));

// Server setup
app.listen(port, () => {
    console.log(`started server on [::]:${port}, url: http://localhost:${port}`);
});


