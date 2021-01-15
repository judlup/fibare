import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions";
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
                <ul className="todos list-groups">
                  {/* {todos.length}-- */}
                  {/* {todos.length == 0
                    ? "Nada"
                    : todos.map((todo) => {
                        <li className="todo list-group-item">
                          <InputGroup>
                            <Form.Check
                              type="checkbox"
                              label="write this code "
                            />
                            <InputGroup.Append>
                              <Button
                                variant="outline-secondary"
                                size="sm"
                                className="home-delete-btn"
                              >
                                &times;
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </li>;
                      })} */}
                </ul>
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
