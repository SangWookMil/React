import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  CloseButton,
  OverlayTrigger,
  Tooltip,
  FloatingLabel,
  Form,
  Button
} from "react-bootstrap";

function App() {
  const [hello, sethello] = useState("hi");
  var [addModal, setAddModal] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Typical Todo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add</Nav.Link>
            <Nav.Link href="#pricing">Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {addModal ? <AddModal setAddModal={setAddModal} /> : undefined}
      <AddButton addModal={addModal} setAddModal={setAddModal} />
    </div>
  );
}

function AddButton(props) {
  return (
    <div
      className="add-button noselect"
      onClick={() => {
        props.setAddModal(true);
      }}
    >
      <h2>+</h2>
    </div>
  );
}

function AddModal(props) {
  function closeModal() {
    props.setAddModal(false);
  }

  return (
    <div
      className="new-todo-background"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="new-todo" tabIndex={"0"}>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Click to Cose.</Tooltip>}
        >
          <CloseButton onClick={closeModal} className="close-button"/>
        </OverlayTrigger>

        <FloatingLabel
          controlId="floatingInput"
          label="What do I have to do?"
          className="mb-3 mt-5"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-bottom`}>Click to add this schedule.</Tooltip>}
        >
          <Button variant="info" className="add-confirm">Done!</Button>
        </OverlayTrigger>
        
      </div>
    </div>
  );
}

function Todo() {}

export default App;
