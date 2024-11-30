import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Listtasks from "./Listtasks";
import "./Format.css";
import { useDispatch } from "react-redux";
import { add } from "./redux/actions/taskAction";

const Formaat = () => {
  const [task, setTask] = useState([]);
  const r = useRef();
  const k = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the value that exists in the local storage
    if (localStorage.getItem("tasklist")) {
      setTask(JSON.parse(localStorage.getItem("tasklist")));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (r.current.value && k.current.value) {
      const newTask = { name: r.current.value, desc: k.current.value, status: "undone" };
      dispatch(add(newTask));

      // Store the updated task list in local storage
      const updatedTaskList = [...task, newTask];
      localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
      setTask(updatedTaskList); // Update the state with the new task list
    }
  };

  return (
    <>
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label" style={{ fontFamily: "fantasy" }}>
            Name of the task
          </Form.Label>
          <Form.Control
            type="text"
            ref={r}
            placeholder="name tasks"
            required={true}
            className="form-control"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontFamily: "fantasy" }} className="form-label">
            description
          </Form.Label>
          <Form.Control as="textarea" rows={2} required={true} ref={k} />
        </Form.Group>
        <Button className="btn" type="submit">
          Submit form
        </Button>
      </Form>
      <Listtasks />
    </>
  );
};

export default Formaat;