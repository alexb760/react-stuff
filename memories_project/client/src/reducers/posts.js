//function that handles actions.
//State can not be null. needs to be equals to something.
// we initialized it to and empty array as a default value.
// state can be named as we wan. this case post.
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
