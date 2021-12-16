<h1 align="middle"> My Flickr API </h1>

## Summary

* [Overview](#Overview)
* [Installation](#Installation)
* [Documentation](#Documentation)
* [Credits](#credits)

## Overview
This API was built with [express](https://expressjs.com/fr/). It allows client to see images according to tags and also to publish your own images when your logged in.


## Installation

### Settings
First, you have to create an ```.env``` file at the ```/api``` directory. You can look at the ```.env.sample``` file to have a preview of all the fields.

### Packages & Run
```
$ ~/my-flickr/api > npm install
$ ~/my-flickr/api > npm run dev
...
$ ~/my-flickr/api > API ready at http://localhost:8080
```

## Documentation
This API is build as a Rest API. Here are a description of all available resources.

### Resources
| method | Endpoint                    | body                                                                | headers                               | description                                       |
|:-------|:----------------------------|:--------------------------------------------------------------------|:--------------------------------------|:--------------------------------------------------|
| `POST` | `/api/authentication/login` | `{ username: string, password: string }`                            |`{}`                                   | returns a JWT Token                               |
| `GET`  | `/api/upload`               | `{}`                                                                |`{}`                                   | returns a list of uploaded files                  |
| `GET`  | `/api/upload/search`        | `{ tags: Array<string> }`                                           |`{}`                                   | returns a list of uploaded files filtered by tags |
| `POST` | `/api/upload`               | `{ file: { name: string, content: Base64 }, tags: Array<string> }`  |`{ authorization: "Bearer JWT_TOKEN" }`| upload a file into the Server                     |

## Credits

Made by **Call-Me-Dev**
