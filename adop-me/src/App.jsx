// Nota 1: PROPS:
// props follows the concept of one-way data flow.
// which means only parents can pass data to its inner childs,
// this make Reac component easy to test and fix bugs. since if something goes wromc
// with data you know where this data came from.

import { createRoot } from "react-dom/client";
import Pet from "./Pet"


// const App = () =>{
//     return React.createElement( 
//         "div",
//         {},
//         [
//             React.createElement("h1", {}, "Adopt me"),
//             React.createElement(Pet, {
//                 name: "Luna",
//                 animal: "Dog",
//                 breed: "Havanese"
//             }),
//             React.createElement(Pet, {
//                 name: "pepper",
//                 animal: "Bird",
//                 breed: "Kakatail"
//             }),
//             React.createElement(Pet, {
//                 name: "Koin",
//                 animal: "Cat",
//                 breed: "Mixed"
//             })]
//     );
//    };


const App = () =>{
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet animal= "Dog" name="Luna" breed="Havanese" />
            <Pet animal= "Bird" name="Pepper" breed="Kackatiel" />
            <Pet animal= "Cat" name="Doink" breed="Mixed" />
        </div>
)};
   
   const container = document.getElementById("root");
   const root = createRoot(container);
   root.render(<App />);