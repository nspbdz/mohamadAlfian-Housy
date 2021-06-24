import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
const ModalSignup = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { handleClose, handleSignUp, show } = props;

    // fullname
  // username
  // email
  // password
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <p className="h1 text-center font-weight-bold">Sign up</p>
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="text"
              value={data.fullname}
              // onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="text"
              value={data.username}
              // onChange={handleChange}
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={data.email}
              // onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={data.password}
              // onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSignup;
