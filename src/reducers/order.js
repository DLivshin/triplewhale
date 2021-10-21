//RECUCER -> Describe action effect on state
const orderReducer =(state = 0, action) => {
    switch(action.type){
      case 'GET_ORDERS':
        return action.payload;
      case 'REFRESH':
        return state = 0;
      default:
        return state;
    }
  }
  export default orderReducer;