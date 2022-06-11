# [{title}][website] &middot; [![GitHub license]](./LICENSE) ![Test Action] ![Netlify Deploy]

<!-- Table of Contents -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

The first step will be to clone the repo

```shell
git clone https://github.com/{repo}.git
```

### For development

The requirements are:

- [Node.js]
- [Yarn]

1. Install the dependencies
   ```shell
   yarn
   ```

## Usage

In order to start the website, you will need to run the NPM scripts that are available in the package.json file,
using `yarn` or `npm run`. Here are the most important ones:

- **dev**: Starts the development server in http://localhost:3000/. The app will automatically reload if you change any
  of the source files.
- **build**: Creates a `.output` directory with all your application, server and dependencies ready for production.
- **generate**: Generates a static build of the website. The build artifacts will be stored in the `dist` directory.
- **preview**: Starts a server to preview your Nuxt application after running the `build` command.
- **test:unit**: Runs the unit tests using [Vitest].
- **test:e2e**: Runs the end-to-end tests using [Cypress].
- **lint**: Lints the project using [ESLint].

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<!-- Packages links -->

[cypress]: https://www.cypress.io
[eslint]: https://eslint.org
[node.js]: https://nodejs.org/en/
[vitest]: https://vitest.dev
[yarn]: https://yarnpkg.com/

<!-- Repository links -->

[website]: https://{author}-{name}.netlify.app/

<!-- Shields.io links -->

[github license]: https://img.shields.io/badge/license-MIT-blue.svg
[netlify deploy]: https://img.shields.io/netlify/your-project-id-here
[test action]: https://github.com/{repo}/actions/workflows/test.yaml/badge.svg
