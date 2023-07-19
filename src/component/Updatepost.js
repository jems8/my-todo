import React, { useState } from "react";
import { TextField } from "@mui/material";
import Navbr from "./Navbr";
import { Card } from "@mui/material";
import { styles } from "../component/style";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CollectionsIcon from "@mui/icons-material/Collections";
import MoodIcon from "@mui/icons-material/Mood";
import Grid from "@mui/material/Grid";

const Updatepost = () => {
  const [allTask, setAllTask] = useState([]);
  const [task, setTask] = useState("");

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
    setAllTask([data, ...allTask]);
    setTask("");
  };
  return (
    <>
      <Navbr />

      <Card sx={{ marginTop: "2rem", border:'2px solid black', width:'max-content', padding:'2rem 1rem' }}>
        <Grid container spacing={2} alignItems="center">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <TextField
            style={{ width: "50rem", borderRadius: "50rem",marginLeft:'2rem' }}
            type="text"
            label="what`s on your mind?"
            onChange={handleChange}
            value={task}
          />
          <Button
            style={styles.button}
            variant="contained"
            onClick={handleClick}
            disabled={!task.length}
          >
            post
          </Button>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ margin: "1rem 0rem 0rem 5rem", gap: "1rem" }}
        >
          <Button
            style={styles.buttonstl}
            variant="contained"
            onClick={handleClick}
            disabled={!task.length}
          >
            <VideoCameraBackIcon />
            <b>Live Video</b>
          </Button>
          <Button
            style={styles.buttonstl}
            variant="contained"
            onClick={handleClick}
            disabled={!task.length}
          >
            <CollectionsIcon />
            <b>Photo/Video</b>
          </Button>
          <Button
            style={styles.buttonstl}
            variant="contained"
            onClick={handleClick}
            disabled={!task.length}
          >
            <MoodIcon />
            <b>Feelings/activity</b>
          </Button>
        </Grid>
      </Card>
    </>
  );
};

export default Updatepost;
