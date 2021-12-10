# i18n simplified

> Is it a bug or a feature?

## Development

You'll need to set the root , a wildcard domain in your Vercel project, as an environment variable. Copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Next, run Next.js in development mode:

```bash
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).

> 💡 Do note that you will need to replace the `ROOT_URL` variable in the `.env.example` file with your domain of choice and add that domain as a wildcard domain your Vercel project.
