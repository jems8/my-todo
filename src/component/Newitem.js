import React from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styles } from "../component/style";

function Newitem(props) {
  const { name, editFunc, checkFunc, deleteFunc, id } = props;

  // console.log('props', props)
  const handleEdit = () => {
    editFunc(id);
  };
  const handleCheck = () => {
    checkFunc(id);
  };
  const handleDelete = (id) => {
    deleteFunc(id)
  };

  return (
    <Card style={styles.card}>
      <Typography style={{fontSize:'2rem'}} variant="h6" gutterBottom>
        title: {name}
      </Typography>
      <div style={styles.button}>
        <Button variant="contained"  onClick={() => handleEdit(id)}>
          Edit         
        </Button>
        <Button variant="contained" onClick={handleCheck}>
          Check
        </Button>
        <Button variant="contained" onClick={()=>{
            handleDelete(id)
        }}>
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Newitem;
