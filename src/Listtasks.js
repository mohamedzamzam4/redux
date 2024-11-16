import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Trtr from "./Trtr";
import { useSelector } from "react-redux";

const Listtasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const [listdone, setListdone] = useState(false);
  return (
    <>
      <h1>TASKS LIST</h1>
      {/* put the tasks in table  */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "1vw" }}>#</th>
            <th style={{ width: "25vw" }}>NAME</th>
            <th style={{ width: "50vw" }}>DESCRIPTION</th>
            <th style={{ width: "25vw" }}>validation</th>
          </tr>{" "}
        </thead>
        <tbody>
          {/* maping the state and display it */}
          {tasks
            .filter((el) => el.status == listdone)
            .map((el, index) => (
              <Trtr el={el} index={index} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listtasks;
