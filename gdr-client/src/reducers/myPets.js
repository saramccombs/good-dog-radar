const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MY_PETS':
      return action.pets
    case 'CLEAR_PETS':
      return initialState
      case "ADD_PET":
        return state.concat(action.pet)
    default: 
      return state
  }
}