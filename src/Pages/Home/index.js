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
  const title = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title.current.value,
      done: false,
    };
    dispatch(addTodo(data));
  };
  return (
    <>
      {auth ? (
        <>
          <Container className="container">
            <Row>
              <Col md={12}>
                <br />
                <h4 className="text-muted text-center">Fibare ToDo</h4>
                <hr />
              </Col>
              <Col md={12}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter Todo here... [Press Enter]"
                      ref={title}
                      autoComplete="off"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col md={12}>
                {todos}--
                <ul className="todos list-groups">
                  <li className="todo list-group-item">
                    <InputGroup>
                      <Form.Check type="checkbox" label="write this code " />
                      <InputGroup.Append>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: "1.25rem",
                            margin: "auto 0",
                            height: "25px",
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                        >
                          &times;
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </li>
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
