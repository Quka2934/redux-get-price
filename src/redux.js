//initial state
let initialState = {
  dayIn: "",
  dayOut: "",
  guests: "",
  hotelIDs: "",
  currency: "USD",
  data: "",
  error: undefined
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "API_CALL_REQUEST":
      return { ...state };
    case "API_CALL_SUCCESS":
      return { ...state, data: action.data };
    case "API_CALL_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
