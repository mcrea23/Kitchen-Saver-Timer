export const getDishes=() => {
  return dispatch => {
    dispatch({ type: "LOADING"})
    fetch("http://localhost:3001/dishes")
    .then(resp => resp.json())
    .then(dishes => dispatch({ type: "SET_DISHES", dishes}))
  }
}


export const addDish=(dish, history) => {
  return dispatch => {
    console.log(dish)
    fetch("http://localhost:3001/dishes", {
      method: "POST", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({dish})
    })
    .then(resp => resp.json())
    .then(dish => {
      dispatch({ type: "ADD_DISH", dish})
      history.push("/dishes")
    })
  }
}

export const deleteDish=(id, history) => {
  return dispatch => {
    fetch (`http://localhost:3001/dishes/${id}`, {
      method: "DELETE", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

    })
    .then(resp => resp.json())
    .then(dish => {
      dispatch({ type: "DELETE_DISH", dish})
      history.push("/dishes")
    })
  }
}