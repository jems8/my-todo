import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styles } from "./style";

const Item = (props) => {
  const { name, id, completed } = props;
  return (
    <Card sx={styles.card}>
      <Typography variant="h4" gutterBottom>
         Task Name:
        {name}
      </Typography>
      <Typography variant="h4" gutterBottom>
         Task Id:
        {id}
      </Typography>
      <Typography variant="h4" gutterBottom>
         Task completed:
        {completed}
      </Typography>
    </Card>
  );
};

export default Item;
