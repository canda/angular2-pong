# angular2-pong
angular 2 pong example using classes from node-console-pong https://github.com/canda/node-console-pong
It's intended to be a guide on how to create an angular 2 application

## Setup
Fork and download the project
```
cd node-console-pong
npm install -g angular-cli
npm install
ng serve
```
To run unit tests
```
ng test
```

## ng-cli
To create a new angular2 app
```
npm install -g angular-cli
ng new PROJECT_NAME
```
To serve the project
```
cd PROJECT_NAME
ng serve
```
To run unit tests
```
ng test
```
To generate new classes
```
ng g component my-new-component
ng g directive my-new-directive
ng g pipe my-new-pipe
ng g service my-new-service
ng g class my-new-class
ng g interface my-new-interface
ng g enum my-new-enum
```
For more info https://github.com/angular/angular-cli

## Files definition

### Config files

* package.json lists packages the app depends on and defines some useful scripts.
* tsconfig.json is the TypeScript compiler configuration file.
* typings.json identifies TypeScript definition files.
* systemjs.config.js, the SystemJS configuration file.

### Main files
* src/index.html defines the web page that hosts the application.
* src/app/main.ts bootstrap angular application
* src/app/app.component.ts defines the main component for the application

## Relative paths

For relative paths on components style and templates to work you need to add on the component decorator
```
moduleId: module.id
```
If not you should use a path relative to index.html
For an explanation on why this is required check this article https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html#appendix-why-component-relative-is-not-the-default

## Lessons learned

* Original classes from node-console-pong are heavily different
If you take a look at https://github.com/canda/node-console-pong you'll notice several differences with the classes
Partly is because the technology differences, but mainly it is because the classes weren't abstract enough

* We should use ng-cli from now on
It's not only that makes development a bit faster avoiding the boilerplate and starting new projects much faster.
For new developers on angular2 it helps adopting the best practices.
It's a lesson learned back on ruby on rails
