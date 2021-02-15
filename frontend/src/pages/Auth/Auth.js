import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { loginUser } from "../../js/actions/authActions";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    history.push("/dashboard");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="email"
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Password"
            className="mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </div>
  );
};

export default Auth;
