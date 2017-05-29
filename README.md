# FlickrMine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Start project

Open first `server` folder and run server by this command :

    npm install
    node index.js

Back to main folder and start angular server:

    npm install
    npm start

Now you should find working site at `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Server Docummentation

`/api/search/` 
 -  Method : `POST`
 -  Parameters : `searchtext`
 -  Return : `JSON`

`/api/photoinfo/`
 - Method : `POST`
 - Parameteres : `photoId` and `secret`
 - Return : `JSON` 
 