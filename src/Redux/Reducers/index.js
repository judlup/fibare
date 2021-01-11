import counterReducer from "./counter";
import logggedReducer from "./isLogged";
import { combineReducers } from "redux";

// const initialState = {
//   login: false,
//   articles: []
// };

// function rootReducers(state = initialState, action){  

//   switch(action.type){
//     case ADD_ARTICLE :
//       return Object.assign({},state,{
//         articles: state.articles.concat(action.payload)
//       });
//     case AUTH_STATUS : 
//       return state.login
//     default :{
//       return state;
//     }
//   }
// }

const rootReducers = combineReducers({
  counter : counterReducer,
  isLogged : logggedReducer
})

export default rootReducers;