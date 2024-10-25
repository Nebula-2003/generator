# Express App Generator

This is a Node.js package for generating an Express app. It provides a command-line interface for creating a new Express app with a basic file structure and configuration.

## Installation

To install the package, run the following command:

```bash
npm i -g @nebula2003/generator-express
```

## Usage

To create a new Express app, run the following command:

```bash
generatorExpress create app <path>
```

To add a new Service, run the following command:

```bash
generatorExpress add-service <name> <path>
```

## Running the Application

To run the application with Babel transpilation and PM2 process manager, follow these steps:

1. Install dependencies:

```bash
npm i
```

2. Run the application:

```bash
npm start
```

3. To stop the application, run the following command:

```bash
npm stop
```

**Note:** The application requires PM2 to be installed globally. To install PM2 globally, run the following command:

```bash
npm i -g pm2
```

**Note:** The ES6 version of this Express app includes Babel for compatibility with older packages that use `require`. Make sure to follow the steps in the [Running the Application](#running-the-application) section to set up and run the application with Babel and PM2.

## Todo :

- Add eslint, prettier configs.
- Improve template
  - Guard clauses
  - Dependency Updates
  - Change scripts to pnpm
  - Add typescipt support
  - Better logging (elk/grafaan integration)
  - Redis integration
  - Remove unnecessary code in templates i.e. imporove template quality
- ecosystem.config.js is not rm from npm.


