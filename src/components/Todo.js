import React, { useState } from "react";
import { Modal, Button, Card, Container, Row, Col } from "react-bootstrap";

const Todo = () => {
  const [inputText, setinputText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  console.log(inputText);

  const addItem = () => {
    if (!inputText) {
      return;
    } else {
      const newItem = { inputText };
      const newTodos = [newItem].concat(items);
      setItems(newTodos);
      setinputText("");
      setShow(!show);
    }
  };

  const deleteItem = id => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  const updateItem = id => {
    const newValue = prompt("Enter Your Task", items[id].inputText);
    if (!newValue) {
      return;
    } else {
      const newTodos = [...items];
      //newTodos[id].isDone = false;
      newTodos[id].inputText = newValue;
      setItems(newTodos);
    }
  };

  const completedItem = id => {
    console.log(id);
    // const newTodos = [...items];
    // newTodos[id].isDone = true;
    // setItems(newTodos);
    // console.log(isDone)
  };
const showButton = (e) =>{
  e.preventDefault();
  setShow(true)
}


  return (
    <div>
      <div className="ui segment">
        <div className="field">
          <div className="ui input">
            <Container>
              <Row>
            <Col md='auto'>
            <label ><h2>TODO List</h2> </label></Col>
            <Col md='auto'>
            <form>
              <Button variant="primary" type="submit" onClick={showButton}>
                {' '}ADD Item
              </Button>
            </form></Col>
            </Row>
            </Container>
          </div>
        </div>
      </div>

      
      
      
      <Card>
        {items.map((elem, id) => {
          return (
            <Card.Title>
              <h2
                className="header"
                style={{
                  textDecoration: elem.isDone ? "line-through" : "bold"
                }}
              >
                {elem.inputText}
              </h2>
              <Container>
                <Row>
              <Col md='auto'><Button  variant='primary'
                    onClick={() => completedItem(id)} >
                    Completed {" "}
                    </Button></Col>

                <Col md='auto'> <Button variant='primary'
                    onClick={() => updateItem(id)} >            
                    Edit{' '}
                </Button> </Col>
                <Col md='auto'>
                <Button variant='primary'
                    onClick={() => deleteItem(id)} >
                    Delete{" "}
                 </Button></Col>
                 </Row>
                 </Container>
                </Card.Title>
          );
  
        })}
        </Card>
      
      <Modal show={show}>
                <Modal.Header>
                  <Modal.Title>Add Item here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                  <input 
                  type='text'
                  value={inputText}
                  onChange={(e)=>{setinputText(e.target.value)}}
               />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={()=>{setShow(false)}} variant="secondary">Close</Button>
                  <Button onClick={()=>{addItem()}} variant="primary">Save Changes</Button>
                </Modal.Footer>
              </Modal>
    </div>
  );
};

export default Todo;