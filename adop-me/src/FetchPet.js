const FetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiResp = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  //is good idea to handle any possible error here.
  if (!apiResp.ok) {
    throw new console.error(`details/${id} fetch no ok`);
  }
  // it needs to return a promise.
  // common way to do it is by this:
  // return await apiResp.json() basicaly the same, just few mileconds more spensive.
  return apiResp.json();
};

export default FetchPet;
