//We use axios to make APIs calls.
import axios from "axios";

//Server:
const URL = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(URL);
