import React, { useState } from "react";
import firebase from "../../Initializers/firebase";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addArticle } from "../../Redux/Actions/index";

const mapStateToProps = (state,dispatch) => {
  return { 
    articles: state.articles,    
  }; 
};

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

const ConnectedList = ({articles}) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

const ConnectedForm = (props) => {
  
  const [title, setTitle] = useState(null);
  
  function handleChange(event) {
    // this.setState({ [event.target.id]: event.target.value });
    setTitle(event.target.value);
  }

  // Middleware function
  function forbiddenWordsMiddleware({ getState, dispatch}){
    return function(next){
      return function(action){
        const nextAction = next(action);
        const state = getState();
        return nextAction;

      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const forbiddenWords = ['spam','money'];
    const foundWord = forbiddenWords.filter(word => title.includes(word))
    if (foundWord){
      return props.titleForbidden();
    }
    props.addArticle({ title });
    setTitle("");
  }
  return ( 
    <>    
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>      
    </>
  );
};

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export const Login = () => {
  function login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      });
  }
  return (
    <>
      <h2>Login</h2>
      <Button
        variant="light"
        onClick={() => {
          login();
        }}
      >
        Google Login 
      </Button>

      <List />
      <Form />
    </>
  );
};