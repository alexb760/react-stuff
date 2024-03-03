// Nota 1: PROPS:
// props follows the concept of one-way data flow.
// which means only parents can pass data to its inner childs,
// this make Reac component easy to test and fix bugs. since if something goes wromc
// with data you know where this data came from.

const pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),

    ]);
};


const App = () =>{
    return React.createElement( 
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt me"),
            React.createElement(pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese"
            }),
            React.createElement(pet, {
                name: "pepper",
                animal: "Bird",
                breed: "Kakatail"
            }),
            React.createElement(pet, {
                name: "Koin",
                animal: "Cat",
                breed: "Mixed"
            })]
    );
   };

   
   const container = document.getElementById("root");
   const root = ReactDOM.createRoot(container);
   root.render(React.createElement(App));