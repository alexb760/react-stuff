const fetchBreeList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const apiResp = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  //is good idea to handle any possible error here.
  if (!apiResp.ok) {
    throw new console.error(`breeds/${animal} fetch no ok`);
  }
  // it needs to return a promise.
  // common way to do it is by this:
  // return await apiResp.json() basicaly the same, just few mileconds more spensive.
  return apiResp.json();
};

export default fetchBreeList;
