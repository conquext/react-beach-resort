import { createClient } from "contentful";

console.log("acct1", process.env);

console.log("acct", process.env.REACT_APP_API_ACCESSTOKEN);

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_API_ACCESSTOKEN
});
