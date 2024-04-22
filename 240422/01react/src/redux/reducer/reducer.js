

const initialState = {contactList:[], keyword:""} ;

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
    default:
      return{...state};
  }
};

export default reducer;