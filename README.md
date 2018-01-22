# Gnomon
https://gnomon.gq/

## Development server
Run `gulp watch` to start the server and watch for file changes. Runs on port 3000.

## Build
Run `gulp build` to build the project. This will execute two sub-tasks: `gulp transpile` to transpile server-side files and`gulp ng-build` to build client files.

The build artifacts are stored in the `dist/` directory. 

## Tests

Run `npm test` to execute server-side tests via Mocha.

Run `ng test` to execute client-side tests via Mocha/Karma.

Run `ng test --watch=false --code-coverage` to generate coverage stats in `/coverage`.

## Deploy

Switch to the heroku branch and run `npm run heroku` to deploy the app to Heroku.

Run `gcloud app deploy` to deploy to Google Cloud. 

## TODO
- Tweak ellipsis in blog posts
- Smoother post transition 
