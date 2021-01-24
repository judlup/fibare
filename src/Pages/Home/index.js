import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaBeer, FaCloudsmith } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { addTodo, deleteTodo, toggleTodo } from "../../Redux/Actions";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
    }
  };

  const handleDelete = (todo) => {
    props.deleteTodo(todo);
  };

  const handleToggle = (todo) => {
    props.toggleTodo(todo);
  };

  return (
    <>
      {auth.login ? (
        <>
          <Container className="container">
            <Row>
              <Col md={12}>
                <br />
                <h4 className="text-muted text-center">
                  <FaCloudsmith /> Fibare ToDo
                </h4>
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
                    autoFocus
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
                            <Form.Check
                              type="checkbox"
                              onChange={() => handleToggle(item)}
                              checked={item.done}
                              label={item.title}
                            />
                            <small className="home-date-todo">
                              {moment(item.createdAt).calendar()}
                            </small>
                            <Button
                              onClick={() => handleDelete(item)}
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
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  };
};

const mapStateToProps = (state) => {
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
