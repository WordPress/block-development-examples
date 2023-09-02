Welcome to the `wp-blocks-examples` repo on GitHub. Here you can find a bunch of examples for WordPress blocks that you can use as a reference to create your own. 

## Getting Started

To get up and running within the `wp-blocks-examples` repo, you will need to make sure that you have installed the prerequisites.

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)- While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains [an `.nvmrc` file](.nvmrc) which helps ensure you are using the correct version of Node.
- [PNPM](https://pnpm.io/installation) - Our repository utilizes PNPM to manage project dependencies and run various scripts involved in building and testing projects.

```bash
# Install pnpm globally if you don't have it already. See https://pnpm.io/installation
npm i -g pnpm
# Ensure that you're using the correct version of Node
nvm use
# Install the dependencies for all of the plugins
pnpm install
# Build all of the plugins in the monorepo
pnpm run build
```

At this point you are now ready to begin developing and testing. All of the build outputs are cached running `pnpm run build` again will only build the plugins that have changed since the last time you ran the command.

## See the block examples in action

### Individually

Go to to the plugin folder of the block you're interested to see in action and run `wp-now` from that folder

```
cd plugins/01-block-dynamic
npx @wp-now/wp-now start
```

### All of them

Go to to the root folder of the project and run

```
npm run env:start
```

<details>
  <summary><em>Troubleshooting</em></summary>

If you get some errors you can try the following:
- Run `npm run env:restart`
- Go to Docker, remove all containers and then run again `npm run env:start`

</details>
<br/>

## Repository Structure

-   [**Plugins**](plugins): This repository contains plugins that register each one of the block examples.

## Block Examples

| &nbsp; | code | title | folder | description |
|--------|------|-------|--------|-------------|
| ![]( https://placehold.co/15x15/64756b/64756b ) | 64756b | Block Dynamic | [dynamic-block-64756b](./plugins/dynamic-block-64756b) |             |
| ![]( https://placehold.co/15x15/3df23d/3df23d ) | 3df23d | Example: Basic (ESNext) | [esnext-basic-3df23d](./plugins/esnext-basic-3df23d)  |        |
|                                                 |        |                         |                      |             |
