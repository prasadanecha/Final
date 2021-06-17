import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { getInitialData, login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom'

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const storeauth = useSelector((state)=>state.storeauth)

  const dispatch = useDispatch();

 

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    dispatch(login(user));
  };
  

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  if (storeauth.authenticate) {
 
    return <Redirect to={`/storeHome`} />;
  }


  return (
    <>
      <Layout></Layout>

      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <NavLink to="/reset" className="nav-link" >Forget Password</NavLink>
            </Form>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

export default Signin;
