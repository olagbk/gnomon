# Gnomon

## Development server
Run `gulp watch` to start the server and watch for file changes. Runs on port 3000.

## Build
Run `gulp build` to build the project.

Run `gulp transpile` to only transpile server-side files to ES5.

Run `gulp ng-build` to only build client files (NB: `-prod` flag will be needed a production build).

The build artifacts are stored in the `dist/` directory. 

## Tests

Run `npm test` to execute server-side tests via Mocha.

Run `ng test` to execute client-side tests via Mocha/Karma.

Run `ng test --watch=false --code-coverage` to generate coverage stats in `/coverage`.

## Heroku

`git checkout heroku` and `npm run heroku` to deploy the app. 

## TODO
- CanDeactivate Guard for email and post edit
- secure posts POST route
