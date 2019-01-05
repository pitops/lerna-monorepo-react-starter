# Lerna Monorepo React Starter

[![Build Status](https://travis-ci.com/pitops/lerna-monorepo-react-starter.svg?branch=master)](https://travis-ci.com/pitops/lerna-monorepo-react-starter) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![Greenkeeper badge](https://badges.greenkeeper.io/pitops/lerna-monorepo-react-starter.svg)](https://greenkeeper.io/)

### Setup

1. Pre-requisites

   ```bash
   brew install yarn

   # Alternative
   sudo npm install -g yarn
   ```

2. Requisites

   ```bash
   yarn global add lerna lerna-wizard
   ```

3. Dependencies

   ```bash
   yarn install
   ```

### Starting project

```bash
yarn <workspace> <command-from-package>
```

#### Example using the UI package (provided)

When you run the following command, it will run the dev command of ui/package.json

```bash
yarn ui dev
```

Note: See the **root** package.json file on how this is setup

### Useful Commands

#### Add a new dependency to specific package

```bash
yarn workspace <name-of-workspace> add <npm package name>
```

#### Add a global dependency

```bash
yarn add <npm package name>
```

**Note** All dev dependencies should be specified to the root `package.json` only.

#### Remove a dependency

Either for global or specific package dependency just use the appropriate command as shown above, just replace `add` with `remove`.

#### Hoist dev dependencies of a packages up to the root package.json file

```bash
lerna link convert
```

This will move all dev dependencies from all packages up to the root `package.json` and remove them from the respective child package `package.json` after symlinking as needed.

### Running a specific command for all packages

Say you want to run tests for packages, you can do the following

```bash
lerna run dev --stream
```

The `--stream` flag is used to show the output from the child processes.

### Running a specific command for a specific package

```bash
lerna run dev --scope <package-name> --stream
```

### Interactive way to work with Lerna

If you installed the Lerna Wizard package on your computer, then you can use it to do some common things using a more interactive approach. Run the following command to get started.

```bash
lerna-wizard
```

### FAQ

#### Husky pre-commit hook is not working

Most probably you initialized git **after** running `yarn install`. Remove node_modules, yarn.lock and re-run `yarn install`. Also make sure that `cat .git/hooks/pre-commit` exists and has reference to husky.

#### Dependencies seem to break after adding a new dependency to a package

After running `yarn workspace <workspace-name> add <package-name>`

Do a `lerna bootstrap` to link everything together.

### Guidelines

#### When adding a new package

1. Remember to include a package.json and make sure the version is consistent with the rest of the projects.

2. If you have tests using jest, remember to open up `jest.config.js` and add a displayName attribute so that when running tests in CI, it is easy to know for which package they are failing.
