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
 debuggin in slint `npm run eslint -- --debug` the `--` means pass the debug to the underline command. 

```shell
#install vite
npm npm i -D vite@3.1.4 @vitejs/pluigin-react@2.1.0 
``` 
Vite is a build tools will help to deploy locally or build a production app.
Note: make sure to create a `vite.config.js` to configure our build tool.
```shell
#run app local
npm npm run dev
# or
npm vite 
``` 

## Configuring JSX and moving old js to JSX
pay attentions at the changes made in `.eslintrc.json`
notes: [Conf JSX](https://react-v8.holt.courses/)

## Hooks:
link: [Hooks lesson:](https://react-v8.holt.courses/lessons/core-react-concepts/hooks)
In a nutshell, hooks are able to update inputs inside its component.

## Effects:
Link [Effects lesson](https://react-v8.holt.courses/lessons/core-react-concepts/effects).
Effects are used to perform action outside components one of this action could be an API request from third API system.
General notes: are. Effects will render each time a component re-render. So is necessary to pass some dependencies to tell when it will re-render.
```javascript
import { effect, useState } from "react",

const myComponente = () =>{
    const [myVariable, setMyVariable] = useState([]);
    useEfect(() => {
        requestApi();
    })

    async function requestApi(){
        const request = await fetch("http://my-domain/v1/api/request");
        const response = await request.json();
        setMyVariable(response.data);
    }
}
``` 
```javascript
import { effect, useState } from "react",

const myComponente = () =>{
    const [myVariable, setMyVariable] = useState([]);
    useEfect(() => {
        requestApi();
    }) // by default re-render each time component changes.

    useEfect(() => {
        requestApi();
    }, []) // renders the very first time the component loads.

    useEfect(() => {
        requestApi();
    }, [myArgument]) // Renders any time 'myArgument' changes.

   //...
}
``` 
## Component composition:
Some time is worthy to extract functions to a separated component:
When:
* When it can be reusable.
* When it isolated logic as a single responsibility principle.
Why.
* Makes easy testable components.
* Makes readable and understandable components.
[Component composition lesson](https://react-v8.holt.courses/lessons/core-react-concepts/component-composition)
### Styling Pet component.
 Applying CSS styles to the Pet component.