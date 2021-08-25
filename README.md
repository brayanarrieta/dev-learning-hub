# Dev Learning Hub

## Requirements

- Node >= 12.x

## Steps

First of all we need to install the dependencies with the next command

```
npm install
```

We need to create an **.env.local** file in main directory with the next content an fill with our configuration setup options. There is an **.env.sample** in the client that can be used.

```
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'
MONGO_URI=mongodb+srv://DevLearningHubUser:<password>@devlearninghubmongoclus.lvnas.mongodb.net/development?retryWrites=true&w=majority
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Also there is an **.env.local.example** that could be used

Please make sure of that because some environment variables are used to setup the application and the API request processes.

After that we need to insert some mocked data with the next command

```
npm run seeds
```

Once the seeds are inserted we can start the project as development environment with the next command

```
npm run dev
```

## Commands

Linter with autofix

```
npm run lint:fix
```
