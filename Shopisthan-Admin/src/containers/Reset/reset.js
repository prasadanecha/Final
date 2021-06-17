import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
// import { login, reset } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axiosIntance from "../../helpers/axios";
// import {useDispatch} from 'react-redux'


const Reset = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  

const reset = (user) => {
    return async dispatch => {
  

    //   console.log(user);
        
      const res = await axiosIntance.post(`/admin/reset-password`,user)
      console.log(res);
      if (res.status === 200) {
      
       
  
        alert(res.data.message)
      }else if(res.status === 422){
        //   console.log(res);
        alert(res.data.error)
      }
      else{
          alert("Eooer")
      }
  
  
    }
  }
  
  

 

  const userLogin = (e) => {
    e.preventDefault();

    // if(email ===""){
    //    return alert("Enter Email")
    // }

    const user = {
      email
    
    };
    dispatch(reset(user));
    // .then(result=>{
    //     if(result){
    //         alert("Check Email")
    //     }
    //     else{
    //         alert("Enter valid Email")
    //     }
    // })
  };

//   if (auth.authenticate) {
//     return <Redirect to={`/`} />;
//   }

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

              <Button variant="primary" type="submit">
               Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Reset;
