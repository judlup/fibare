import { ADD_ARTICLE } from "../Constants/actions-types";

const initialState = {
  articles: []
};

function rootReducers(state = initialState, action){
  if(action.type === ADD_ARTICLE){
    return Object.assign({},state,{
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducers;