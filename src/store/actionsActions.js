import { getData } from "./actions";
export const fetchData = () => {
  return async (dispatch) => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => dispatch(getData(json)));
  };
};
