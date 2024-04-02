async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  console.log(animal, location, breed);
  const rest = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  if (!rest.ok) {
    throw new console.error(
      `pet search no okay ${animal}, ${location}, ${breed}`
    );
  }

  return rest.json();
}

export default fetchSearch;
