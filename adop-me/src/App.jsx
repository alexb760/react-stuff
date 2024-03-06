// Nota 1: PROPS:
// props follows the concept of one-way data flow.
// which means only parents can pass data to its inner childs,
// this make Reac component easy to test and fix bugs. since if something goes wromc
// with data you know where this data came from.

import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParam from "./SearchParam";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";

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

// const App = () =>{
//     return (
//         <div>
//             <h1>Adopt Me!</h1>
//             <Pet animal= "Dog" name="Luna" breed="Havanese" />
//             <Pet animal= "Bird" name="Pepper" breed="Kackatiel" />
//             <Pet animal= "Cat" name="Doink" breed="Mixed" />
//         </div>
// )};

//Using a component with Hooks.

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <SearchParam />
//     </div>
//   );
// };

// Using Routers. it will allow to open diferent pages as it still is a single page.
const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt me! V1</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParam />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
