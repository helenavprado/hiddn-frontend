const name = () => {
  return {
    type: "nome",
    payload: "Helena",
  };
};

const initialState = { nome: "" };
const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "nome":
      return { ...initialState, nome: action.payload };

    default:
      return state;
  }
};

export default nameReducer;
