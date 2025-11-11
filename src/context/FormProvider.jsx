import react, { createContext, useReducer, useContext } from "react";

const initialState = {
    step: 1,
    personal: { name: "", email: "", phone: "" },
    plan: { type: "arcade", billing: "monthly" },
    addons: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    case "UPDATE_PERSONAL":
      return { ...state, personal: { ...state.personal, ...action.payload } };

    case "SET_PLAN":
      return { ...state, plan: action.payload };

    case "TOGGLE_ADDON":
      const { id } = action.payload;
      const exists = state.addons.includes(id);
      return {
        ...state,
        addons: exists
          ? state.addons.filter((a) => a !== id)
          : [...state.addons, id],
      };

    default:
      return state;
  }
}

dispatch({ type: "UPDATE_PERSONAL", payload: formData });
dispatch({ type: "NEXT_STEP" });

const FormContext = createContext();

export function useFormState() {
  return useContext(FormContext);
}


export default function FormProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
