# tRPC Server Client Turborepo Template

This is a straightforward monorepo that includes an Express tRPC server. The server interacts with a Next.js application and provides a wide range of features through tRPC.

With this template, you can quickly set up a powerful server-client architecture for your web application. The combination of Express, tRPC and Next.js offers a seamless development experience and enables you to build robust and efficient applications with the ease of adding API documentation through OpenApi and SwaggerUI which comes integrated into this template.

Feel free to use this template as a starting point for your projects and customize it according to your specific requirements.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: A simple [Next.js](https://nextjs.org/) app that can be used to compare changes made to the `apps/web` application. It serves as a reference to understand the modifications.
- `server`: This is a TypeScript Express [tRPC](https://trpc.io/) server with [swaggerUI](https://github.com/swagger-api/swagger-ui). It provides the backend functionality for your application and handles API requests.
- `web`: another [Next.js](https://nextjs.org/) app with [tRPC](https://trpc.io/) Client which interacts with `api` package. It also incorporates [TailwindCSS](https://tailwindcss.com/) for styling.
- `trpc`: everything related to [tRPC](https://trpc.io/) including procedures and [trpc-openapi](https://github.com/jlalmes/trpc-openapi) exists in this package folder which is currently being used by `server`.
- `ui`: a stub React component library shared by both `web` and `docs` applications. It includes reusable components and is styled using [TailwindCSS](https://tailwindcss.com/).
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: tailwind configuration which is used throughout the monorepo
- `prettier-config`: This package includes the styling configuration for Prettier, ensuring consistent code formatting throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd trpc-server-client-turborepo-template
yarn
```

### Develop

**Setting up .env file** - Copy .env.example file and rename it to .env in the root directory

To develop all apps and packages, run the following command:

```
cd trpc-server-client-turborepo-template
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd trpc-server-client-turborepo-template
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Contributions

I welcome contributions to help improve this template! If you have any issues or recommendations for enhancements, please feel free to raise them. Your feedback is valuable and will help me make this template even better.

To contribute, you can:

- **Raise an issue**: If you encounter any problems or have suggestions for improvements, please create an issue on this GitHub repository. I will review it and work together with you to find a solution.

- **Submit a pull request**: If you have a specific improvement in mind, you can fork the repository, make your changes, and submit a pull request. I will review your changes and merge them if they align with the project's goals.

By contributing to this template, you'll be helping not only me but also the community by making it more robust and user-friendly!
At the moment I would really appreciate some help with file structure recommendations for Turborepo for the technologies inside the repository. 

Thank you for your support!
