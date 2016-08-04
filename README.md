[![CircleCI](https://circleci.com/gh/Whataboon/ComponentsLibrary.svg?style=shield&circle-token=8feb2694fd39149d1bbcad7181ae9ff902e7e314)](https://circleci.com/gh/Whataboon/ComponentsLibrary) [![codecov](https://codecov.io/gh/Whataboon/ComponentsLibrary/branch/master/graph/badge.svg?token=1ebF1dHbi0)](https://codecov.io/gh/Whataboon/ComponentsLibrary)


# ComponentsLibrary
All new react component we have to use for Whataboon

## Installation

    npm install
    
## Start library

    npm start
    
Server will start at `http://localhost:3000` 

## Components

Components must be document, test before sending pull request.  
We made a component generator, you can easily create new component with our template by typing `npm run create-component`  
Test your components with `npm test`  

The build will fail, if `npm test` fail.

## Continuous Integration

Every pull request will be test by `Circle CI`. 

Checking steps : 

 - Dependencies checking ( ununsed or missing )
 - Unit test
 - Code coverage
    
Acceptance criteria : 

 - No unused or missing dependency
 - Every test succeeded
 - Code coverage > 80%
 
 


    

