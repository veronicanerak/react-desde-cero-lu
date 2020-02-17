import { createStore } from "redux"

const initialStore = {
    cart: ["a", "b"] //Shopping cart, initial value empty. This is the first global value
}

const rootReducer = (state = initialStore, actionre) => {
  return state
}

export default createStore(rootReducer)    //export the function "createStore" created, with the parameter rootReducer