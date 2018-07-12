//initial state
let initialState = {
  dayIn: "",
  dayOut: "",
  guests: "",
  hotelIDs: "",
  currency: "USD",
  data: "",
  hotelData: [],
  error: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "API_CALL_REQUEST":
      return { ...state, data: action.data };
    case "API_CALL_SUCCESS":
      return { ...state, hotelData: action.hotelData };
    case "API_CALL_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
}
