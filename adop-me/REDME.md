# Simple Read App.

## Course from FrontEnd-master. 
[React note course](https://react-v8.holt.courses/)

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

```shell
#install vite
npm npm i -D vite@3.1.4 @vitejs/pluigin-react@2.1.0 
``` 
vite is a build tols will help to deploy localy or build a production app.
note: make sure to create a `vite.config.js` to configure our build tool.
```shell
#run app local
npm npm run dev
# or
npm vite 
``` 

## Configuring JSX and moving old js to JSX
pay attentions at the chages made in `.eslintrc.json`
notes: [Conf JSX](https://react-v8.holt.courses/)

## Hooks:
link: [Hooks lesson:](https://react-v8.holt.courses/lessons/core-react-concepts/hooks)
In a nutshell, hooks are able to update inputs inside its component.