# Grommet Next.js Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/eea4b49d-226a-4026-8d10-49d0830e0939/deploy-status)](https://app.netlify.com/sites/grommet-nextjs-starter/deploys)

This is a starter project for React that uses Grommet and Next.js.

### Getting Started

Clone or fork this example to your local machine.

```
git clone git@github.com:taysea/grommet-nextjs-starter.git
cd grommet-nextjs-starter
```

Install dependencies and start the developmenet server.

```
yarn install
yarn start
```

To run in production mode:

```
yarn build && yarn next start
```

### Deploy your app to Netlify

To deploy with Netlify, connect this repository to your Netlify account. Then, go to Site settings > Build & deploy.

Update the settings to be:

Build command: `yarn export`

Publish directory: `/out`
