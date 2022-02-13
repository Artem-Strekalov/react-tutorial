import defaultData from "./defaultData";

const data = (state = defaultData, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
export default data;
