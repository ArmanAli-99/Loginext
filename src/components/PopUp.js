import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const PopUp = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let data = localStorage.getItem("fakeUserData");
    let ary = JSON.parse(data);
    let output = ary.map((ele, i) => {
      if (ele.id === props.userInfo.id) {
        return {
          ...ele,
          name: e.target.username.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          website: e.target.website.value,
        };
      } else return ele;
    });
    localStorage.setItem("fakeUserData", JSON.stringify(output));
    props.setDataUpdated(true);
    props.closeModal();
  };
  return (
    <>
      <Modal show={props.showModal} onHide={props.closeModal}>
        <Form onSubmit={submitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Basic Model</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name="username" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="abc@gmail.com"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="010-424-4214"
                name="phone"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>website</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://anastasia.net"
                name="website"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default PopUp;
