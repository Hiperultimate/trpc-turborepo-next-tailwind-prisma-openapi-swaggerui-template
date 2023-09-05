import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../../api/routers/root';

// function getBaseUrl() {
//   if (typeof window !== 'undefined')
//     // browser should use relative path
//     return '';

//   if (process.env.VERCEL_URL)
//     // reference for vercel.com
//     return `https://${process.env.VERCEL_URL}`;

//   if (process.env.RENDER_INTERNAL_HOSTNAME)
//     // reference for render.com
//     return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

//     console.log("Checking base URL :" ,`http://localhost:${process.env.LOCAL_SERVER_PORT ?? 3002}`);
//   // assume localhost
//   return `http://localhost:${process.env.LOCAL_SERVER_PORT ?? 3002}`;
// }

function getBaseUrl() {
  return 'http://localhost:3002';
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
          url: `${getBaseUrl()}/api`,

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