# Gnomon

## Development server
Run `gulp watch` to start the server and watch for file changes. Runs on port 3000.

## Build
Run `gulp build` to build the project.
Run `gulp transpile` to only transpile server files to ES5.
Run `gulp ng-build` to only build client files (NB: `-prod` flag will be needed a production build)

The build artifacts will be stored in the `dist/` directory. 

## Running unit tests

Run `npm test` to execute server-side tests.
Run `ng test` to execute client-side tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
(Not implemented yet)

## Heroku

`git checkout heroku` and `npm run heroku` to deploy the app to Heroku. 
