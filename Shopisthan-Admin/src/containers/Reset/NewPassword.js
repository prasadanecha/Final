import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login, newPassword } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import {useDispatch} from 'react-redux'

import {useParams} from 'react-router-dom'

const NewPassword = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

const{token} = useParams()
console.log(token);
console.log("Hello");

  const dispatch = useDispatch();

 

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      token,
      password
    };
    dispatch(newPassword(user));
    // dispatch(login(user));
  };

 
  return (
    <>
      <Layout></Layout>

      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
             
              <Input
                label="Password"
                placeholder="Enter New Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewPassword;
