import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from './routers/root';


export const openApiDocument = generateOpenApiDocument(appRouter, {
    title: 'tRPC OpenAPI',
    version: '1.0.0',
    baseUrl: 'http://localhost:3002/api',
});