import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  const [hello, sethello] = useState("hi");
  var [addModal, setAddModal] = useState(false);

  function handleAdd() {
    console.log("clicked");
    setAddModal(true);
  }

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
      {addModal ? <AddModal /> : undefined}
      <AddButton onClick={handleAdd}/>
    </div>
  );
}

function AddButton() {
  return (
    <div className="add-button noselect">
      <h2>+</h2>
    </div>
  );
}

function AddModal() {
  return <div>hello</div>;
}

function Todo() {}

export default App;
