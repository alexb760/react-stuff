# Simple Read App.

## Course from FrontEnd-master.

## Setting up the project:

### Installing package.json, prettier, eslint.

```shell
# Creates a init package.json.
npm init -y
```
```shell
# install the specific prettier version.
npm install --save-dev prettier@2.7.1
```
note: is needed to create a `.pretierrc` file in the command so that vs will know there is a prettier config.

```shell
#install eslint
npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0
```
Note: Creates a `.eslintrc.json` file.
 debugin in slint `npm run eslint -- --debug` the `--` means pass the debug to the underline command. 
