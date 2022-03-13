# TIGERHALL CONTENT

Welcome to the best, SEO-friendly, performant and modern single-page application to search [Tigerhall](https://tigerhall.com/) content.
You can find a **live preview [here](https://tigerhall-content.vercel.app/)**, deployed on [Vercel](https://vercel.com/).

## System requirements

- Node.js 12.22.0 or later
- MacOS, Windows (including WSL), and Linux are supported
- Yarn

## How to use

1. **Clone** the repository. If you are not familiar with this term, please take a look at [this guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
2. Make sure your terminal is pointing to the new directory you created when cloning the repository.
3. Install the project dependencies executing:

```bash
$ yarn
```

4. Run the project with:

```bash
$ yarn dev
```

5. In your favorite browser (I hope it's not IE), visit the URL http://localhost:3000

## Tests

In this project you have 4 different scripts to run the tests.

```bash
"cypress"
"cypress run"
"e2e"
"e2e:headless"
```

Plase check the `package.json` for more details and remember that to run Cypress you need some required dependencies installed in your system. [More info here](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

## Tech stack

NextJS + React
Typescript
GraphQL + Apollo client
Chakra UI
Next SEO
Cypress

## Considerations

- The Commit Messages are based in the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) (with no body nor footer).
- The reason why, when necessary, I import React this way `import * as React from 'react'` -> https://epicreact.dev/importing-react-through-the-ages/
- Some image URLs coming from the API are broken, that's why you will see a fallback image many times.
- This is my first time building with Chakra UI. I would love to spend more time with it, is pretty flexible and full of great features I didn't have the chance to try this time.
