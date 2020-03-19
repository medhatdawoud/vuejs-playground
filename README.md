# vuejs playground

This is my playground for learning hands on experience with vuejs

# Idea

Simple vuejs Application to get info for given github username

# Input

Github username

# Output

- name
- email
- avatar
- company
- location
- number of repos
- number of public gists
- number of followers
- number of following

# How to install?

After cloning the repo. and from the project's root folder, `vuejs-playground` folder do the following:

 1. `npm install` to install all dependencies in `package.json`
 2. `npm run start` to automatically open the default browser on local http server. Checkout [live-server](https://www.npmjs.com/package/live-server#usage-from-command-line) documenation in order to know some customization features of it in `package.json` for example, to start it on port 8888:

 ```
 ...
 "scripts": {
    "start": "live-server --port=8888",
    ... 
 ```


 If you would like to run it locally. i.e from the local filesystem, you have to rmove the prefixed slash of the src attribute of the script tag in `index.html` to be `build/main.js` instead of `/build/main.js`.
