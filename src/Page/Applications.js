import React from 'react'

import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navbr from "../component/Navbr";
import { useNavigate } from 'react-router-dom';

const Applications = () => {

  // const navigate= useNavigate();
  
  const navigateToCalculator = () => {
    window.location.href = '/calculator';
    // navigate('calculator')
  };
  const navigateToTodoList = () => {
    window.location.href = '/';
    // navigate('calculator')
  };
  return (
    <>
    <Navbr/>
    <Card sx={{ width: 300 ,margin:'3rem'}} onClick={navigateToCalculator}>
      <CardMedia
        sx={{ height: 300 }}
        image ="475497.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          Calculator
        </Typography>
         
      </CardContent> 

    </Card>
    <Card sx={{ width: 300 ,margin:'3rem'}} onClick={navigateToTodoList}>
      <CardMedia
        sx={{ height: 300 }}
        image ="jems.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          TodoList
        </Typography>
         
      </CardContent> 
      </Card>
    </>
  )
};

export default Applications
