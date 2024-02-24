import logo from "./logo.svg";
import "./App.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
function CollapsibleExample() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">Primary</Badge>
          <Badge bg="secondary">Secondary</Badge>
          <Badge bg="success">Success</Badge>
        </Stack>
      </div>
      <div>
        <>
          {["Primary", "Secondary", "Success"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      </div>
    </div>
  );
}

export default CollapsibleExample;
