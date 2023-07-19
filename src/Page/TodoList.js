import React, { useState, useEffect, useMemo } from "react";
// import Item from "../component/Item";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { styles } from "../component/style";
import Newitem from "../component/Newitem";
// import Navbr from "../component/Navbr";
import { TextField } from "@mui/material";

const TodoList = () => {
  // const temporaryArray=[];

  const [allTask, setAllTask] = useState([]);
  const [task, setTask] = useState("");
  const [filterText, setFilterText] = useState("");
  // const [filterTask, setFilterTask] = useState(allTask);

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setFilterText(searchTerm);
  };

  // useEffect(() => {
  //   const filteredArr = allTask.filter((indv) =>
  //     indv.name.includes(filterText)
  //   );
  //   setFilterTask([...filteredArr]);
  // }, [filterText,allTask]);

  // useEffect(() => {
  //   setFilterTask(allTask);
  // }, [allTask]);

  const initialobj = {
    id: Math.ceil(Math.random() * 10),
    name: "",
    complete: "false",
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    const data = {
      ...initialobj,
      name: task,
      id: Math.ceil(Math.random() * 10),
    };
    // temporaryArray.push(data);
    setAllTask([data, ...allTask]);
    setTask("");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("task"));
    if (storedData) {
      setAllTask(storedData);
    }
  }, []);

  useEffect(() => {
    if (!!allTask.length) {
      localStorage.setItem("task", JSON.stringify(allTask));
    }
  }, [allTask]);

  const [newName, setnewName] = useState("");

  const handleEdit = (id) => {
    const updatedTasks = allTask.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: newName,
        };
      }
      return task;
    });
    setAllTask(updatedTasks);
    setnewName("");
  };

  const handleDelete = (id) => {
    const newValue = allTask.filter((task) => task.id !== id);
    setAllTask(newValue);
    localStorage.setItem("task", JSON.stringify(newValue));
  };

  const handleCheck = () => {
    const data = {
      ...initialobj,
      name: task,
      id: Math.ceil(Math.random() * 10),
    };
    setAllTask([data, ...allTask]);
    setTask("");
  };

  return (
    <>
      {/* <Navbr /> */}
      <Card sx={{ marginTop: "2rem" }}>
        <Typography variant="h1">List of Item</Typography>
        <TextField
          style={styles.jems}
          type="text"
          onChange={handleChange}
          value={task}
          // onKeyDown={handleClick}
        />

        <Button
          style={styles.button2}
          variant="contained"
          onClick={handleClick}
          disabled={!task.length}
        >
          submit
        </Button>

        <TextField
          style={{ marginLeft: "10rem", width: "40rem" }}
          type="text"
          value={filterText}
          onChange={handleFilter}
          placeholder="Search tasks..."
        />
        <div
          style={{
            display: "flex",
            margin: "10px",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* {!!allTask.length &&
            allTask?.map((indvEle) => (
              <Newitem
                editFunc={handleEdit}
                checkFunc={handleCheck}
                deleteFunc={handleDelete}
                name={indvEle?.name}
                id={indvEle?.id}
                completed={indvEle?.complete}
                key={indvEle?.id}
              />
            ))} */}
          {!!allTask.length &&
            allTask.filter((indvEle) => indvEle.name.startsWith(filterText))
            .map((indvTask) => (
              <Newitem
                editFunc={handleEdit}
                checkFunc={handleCheck}
                deleteFunc={handleDelete}
                name={indvTask?.name}
                id={indvTask?.id}
                completed={indvTask?.complete}
                key={indvTask?.id}
              />
            ))}
        </div>
      </Card>
    </>
  );
};

export default TodoList;
