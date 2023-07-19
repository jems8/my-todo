import { Box, Card } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbr from "../component/Navbr";
import { styles } from "./style";
import BackspaceIcon from '@mui/icons-material/Backspace';

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "=", "CLEAR"];
function Calculator() {
  const [Value, setValue] = useState("");

  const handleClick = (number) => {
    if (number === "=") {
      try {
        const result = eval(Value);
        setValue(result.toString());
      } catch (error) {
        setValue("Error");
      }
    } else if (number === "CLEAR") {
      setValue(" ");
    } else {
      setValue(Value + number);
    }
  };

  return (
    <>
    <Navbr sx={styles.navbar}/>
    <Card style={{ margin: "2rem", background: "black" ,width: "40rem"}}>
      <TextField
        style={{ background: "white",width: "30rem",margin:'1rem 2rem 2rem 2rem'}}
        id="outlined-basic"
        label="take a number"
        variant="outlined"
        value={Value}
      />

      <Box style={{ marign: "2rem" }}>
        <div style={{ display: "flex", margin: "1rem", gap: "5px" }}>
          {arr1.slice(0, 5).map((number) => {
            return (
              <Button
                variant="contained"
                key={number}
                onClick={() => handleClick(number)}
              >
                {
                  number==="CLEAR"?<BackspaceIcon/>:number
                }
              </Button>
            );
          })}
          ;
        </div>
        <div style={{ display: "flex", margin: "1rem", gap: "5px" }}>
          {arr1.slice(5, 10).map((number) => (
            <Button
              variant="contained"
              key={number}
              onClick={() => handleClick(number)}
            >
              {number}
            </Button>
          ))}
        </div>
        <div style={{ display: "flex", margin: "1rem", gap: "5px" }}>
          {arr1.slice(10).map((number) => (
            <Button
              variant="contained"
              key={number}
              onClick={() => handleClick(number)}
            >
              {number}
            </Button>
          ))}
        </div>
      </Box>
    </Card>
    </>
  );
}

export default Calculator;
