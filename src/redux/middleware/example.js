/*
  🚨1 point EXTRA CREDIT 🚨
  Create a middleware that does somethign interesting, use your imagination.
  DO NOT USE ANY OF THE MIDDLEWARE LOCATED IN THE HELP LINK =]
  Don't forget to add it to the applyMiddleware function in ../configureStore.js
  eg: applyMiddleware(thunk, exampleMiddleware)
  https://redux.js.org/advanced/middleware
*/
const exampleMiddleware = (store) => (next) => (action) => {
  return next(action);
};

export default exampleMiddleware;
