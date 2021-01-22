import React, { useState, useEffect } from "react";
import { db } from "../../Initializers/firebase";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

export const Home = () => {
  const auth = useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleInput(e) {
    e.preventDefault();
    const { name, value } = e.target;
    // setValues({ ...values, [name]: value });
    setTitle(value);
  }

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      const user = auth.user;
      const data = {
        user: user.uid,
        title: title,
        done: false,
        createdAt: Date.now(),
      };
      const result = dispatch(addTodo(data));
      if (result.payload) {
        setTitle("");
        alert("Todo created successful");
      }
    }
  };

  async function getTodos() {
    const docs = [];
    await db.collection("todos").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      dispatch(listTodos(docs));
    });
  }

  useEffect(() => {
    getTodos();
    return () => {
      true;
    };
  }, [dispatch]);

  // const ListItems =
  //   todos.list.length > 0
  //     ? todos.list.map((myData) => <li>{myData.title}</li>)
  //     : "";

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
                  {todos.list.length == 0 ? (
                    "Nada"
                  ) : (
                    <ul className="list-groups">
                      {todos.list.map((item, i) => {
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
