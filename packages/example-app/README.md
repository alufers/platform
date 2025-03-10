:warning: **This is a fork of the original project**

It enables Ivy and makes it work with Angular 13+

# Example App: Zoo Animals

This is a sample project showing how the following packages work together to make a simple
application.

- [redux](https://github.com/reactjs/redux) Predictable state container for Javascript.
- [redux-observable](https://github.com/redux-observable/redux-observable) Side-effect handling with Observables
- [@angular-redux/store](/packages/store) Redux + Angular bindings
- [@angular-redux/router](/packages/router) Time travel with the Angular router
- [@angular-redux/form](/packages/form) Time travel with Angular forms
- [Redux DevTools Chrome Extension](https://github.com/zalmoxisus/redux-devtools-extension)

## Bootstrapping

Before being able to run the app, you will need to bootstrap the workspace dependencies linked by yarn. This can be done using the command `yarn bootstrap`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Using the folder as a standalone

The versions included in `package.json` for the `@angular-redux` dependencies are linked using **yarn workspaces** and will need to be changed to a _latest_ or _next_ version if you want to detach the app as a standalone.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
