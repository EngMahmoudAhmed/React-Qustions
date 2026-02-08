import { dataRecived, dataFailed, Start, dataLoading, answer, Next } from "./actionsTypes";
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
    case dataLoading:
      return {
        ...state,
        status: 'loading'
      }
    case dataFailed:
      return {
        ...state,
        status: 'error',
      };
    case Start:
      return {
        ...state,
        status: 'active',
      };
    case answer:
      return {
        ...state,
        answer:action.payload,
      }

    case Next:
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      }

    default:
      return state;
  }
}

export default reducer;
