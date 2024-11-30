import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Trtr from "./Trtr";
import { useSelector } from "react-redux";

const Listtasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState(
    tasks.filter((task) => {
      if (filter === "done") return task.status === "done";
      if (filter === "undone") return task.status !== "done";
      return true; // Default is "all"
    })
  );

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) =>
        filter == "done"
          ? task.status == true
          : filter == "undone"
          ? task.status == false
          : true
      )
    );
  }, [filter,tasks]);
  console.log(filteredTasks);
  const handleToggleFilter = () => {
    // Cycle through filter options
    setFilter((prev) => {
      if (prev === "all") return "done";
      if (prev === "done") return "undone";
      return "all";
    });
  };

  return (
    <>
      {/* Filter Button */}
      <button onClick={handleToggleFilter} style={{ marginBottom: "20px" }}>
        {filter === "all"
          ? "Show Done Tasks"
          : filter === "done"
          ? "Show Undone Tasks"
          : "Show All Tasks"}
      </button>
      <h1>TASKS LIST</h1>
      {/* Put the tasks in table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "1vw" }}>#</th>
            <th style={{ width: "25vw" }}>NAME</th>
            <th style={{ width: "50vw" }}>DESCRIPTION</th>
            <th style={{ width: "25vw" }}>VALIDATION</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((el, index) => (
            <Trtr key={index} el={el} index={index} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listtasks;
