const initialState={
  dishes: [], 
  loading: true
}

const dishesReducer=(state=initialState, action) => {
  switch(action.type){
    case "LOADING": 
      return{
      ...state,
      loading: true
    }
    case "SET_DISHES":
      return{
        ...state,
        loading: false,
        dishes: action.dishes
      }
      case "ADD_DISH":
        return{
          ...state,
          dishes: [...state.dishes, action.dish]
        }
        default: 
        return state
        case "DELETE_DISH":
          return{
            ...state,
            dishes: state.dishes.filter(dish => action.dish.id !== dish.id)
          }
  }

}


export default dishesReducer