import { getData } from "./actions";
export const fetchData = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
  .then(response => response.json())
  .then(json => dispatch(getData(json)))  
  };
};
