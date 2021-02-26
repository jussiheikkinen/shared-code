# POC calculation microservice

### Contents:

* JavaScript module to handle all calculation
* React front end
* PHP backend end 
* Node.js micro service backend

## Usage

* Clone repository
* npm i lerna -g
* lerna bootstrap
* lerna run start
* Open browser in localhost:3006
  * node api localhost:4001
  * php api localhost:8000

### Structure
.
├── lerna.json
├── package.json
├── packages
│   ├── calculations-module
│   │   ├── index.js
│   │   ├── node_modules
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── node-back-end
│   │   ├── index.js
│   │   ├── node_modules
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── php-server
│   │   ├── index.php
│   │   └── package.json
│   └── react-front-end
│       ├── node_modules
│       ├── package.json
│       ├── public
│       ├── README.md
│       ├── src
│       └── yarn.lock
└── README.md