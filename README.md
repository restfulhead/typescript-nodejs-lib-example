# Common IDE settings for Visual Studio Code and TypeScript development

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This project can be used as a starting point for a TypeScript/NodeJS based library.

# Visual Studio Code extensions

Recommended extensions can be found in `.vscode/extensions.json` and we encourage you to install them.

# TypeScript configuration

This project comes with an example `tsconfig.json` and `tslint.json` to get you started with building TypeScript based libraries.

Note: This repository is outdated.  ESlint should be used instead of TSlint.

# NPM scripts

You'll find several useful NPM scripts in `package.json`.

To build and compile the library run `npm run clean && npm run build`. This will compile all `*.ts` files in the `src` directory and copies them to the `./dist` directory.

To run tests and check coverage use `npm test` and `npm run test:coverage` respectively.

Before committing/pushing it's a good idea to run `npm run prepush`. This will check your code against the lint configuration and run tests that have changed.

Releases are powered by [Standard Version](https://github.com/conventional-changelog/standard-version). To create a new release, run `npm run release`. This will do the following:

- Bumps the version number in `package.json`/`bower.json`
- Updates `CHANGELOG.md` based on [Conventional Commits](https://github.com/conventional-commits/conventionalcommits.org)
- Commits these changes
- Tags a new release

Standard Version decides how to increment the version number based on your commit comments. If you'd like to change this behavior you can use the `--release-as` flag with the argument `major`, `minor` or `patch`, for example: `npm run release -- --release-as major`

For more information about development standards and the release process, please review the TypeScript section in our Wiki.

