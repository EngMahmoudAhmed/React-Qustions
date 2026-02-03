import { dataRecived, dataFailed, Start } from "./actionsTypes";
import { initialState } from "./initialState";

function reducer(state = initialState, action) {
  console.log(state);

  switch (action.type) {
    case dataRecived:
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case dataFailed:
      return {
        ...state,
        status: "error",
      };
      case Start:
        return {
          ...state,
          status:'active',
        };
    default:
      throw new Error("new Erorr");
  }
}

export default reducer;
