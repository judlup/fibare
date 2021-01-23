import React, { useState, useEffect } from "react";
import { db } from "../../Initializers/firebase";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { addTodo, listTodos } from "../../Redux/Actions";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./index.css";

const Home = (props) => {
  const auth = useSelector((state) => state.auth);
  const todos = props.todos;
  const [title, setTitle] = useState("");

  function handleInput(e) {
    const { name, value } = e.target;
    // setValues({ ...values, [name]: value });
    setTitle(value);
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      const user = auth.user;
      const data = {
        user: user.uid,
        title: title,
        done: false,
        createdAt: Date.now(),
      };
      props.addTodo(data);
      setTitle("");
      alert("Todo created successful");
    }
  };

  return (
    <>
      {auth.login ? (
        <>
          <Container className="container">
            <Row>
              <Col md={12}>
                <br />
                <h4 className="text-muted text-center">Fibare ToDo</h4>
                <hr />
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Control
                    size="lg"
                    type="text"
                    value={title}
                    placeholder="Enter Todo here... [Press Enter]"
                    onChange={handleInput}
                    onKeyDown={handleSubmit}
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <div>
                  {!todos ? (
                    "Nada"
                  ) : (
                    <ul className="list-groups">
                      {todos.map((item, i) => {
                        return (
                          <li key={i} className="list-group-item">
                            <Form.Check type="checkbox" label={item.title} />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              className="home-delete-btn"
                            >
                              &times;
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container className="container">
            <Row>
              <Col>
                <br />
                <h4 className="text-muted text-center">Sign In and ToDo all</h4>
                <hr />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  const todos = state.firestore.ordered.todos;
  return {
    todos: todos,
    auth: state.auth,
    uid: state.firebase.auth.uid,
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "todos",
      // where: ["user", "==", ownProps.uid],
      orderBy: ["createdAt", "desc"],
    },
  ])
)(Home);
