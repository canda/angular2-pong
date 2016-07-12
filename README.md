# angular2-pong
angular 2 pong example using classes from node-console-pong https://github.com/canda/node-console-pong
It's intended to be a guide on how to create an angular 2 application

## Quickstart

### Step 1: Create config files

* package.json lists packages the app depends on and defines some useful scripts.
* tsconfig.json is the TypeScript compiler configuration file.
* typings.json identifies TypeScript definition files.
* systemjs.config.js, the SystemJS configuration file.

### Step 2: Install packages

`npm install`
`npm run typings install`

### Step 3: Create main files
* index.html defines the web page that hosts the application.
* app/main.ts bootstrap angular application
* app/app.component.ts defines the main component for the application

### Step 4: Start the app
`npm start`
That command runs two parallel node processes:
* The TypeScript compiler in watch mode
* A static server called lite-server that loads index.html in a browser and refreshes the browser when application files change
