import { httpBatchLink , } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../../api/routers/root';

function getBaseUrl() {
  if (process.env.SERVER_DEPLOY_URL)
    return `https://${process.env.SERVER_DEPLOY_URL}`;

  // assume localhost
  return `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});