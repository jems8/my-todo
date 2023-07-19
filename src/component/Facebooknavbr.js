import * as React from "react";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { deepPurple } from "@mui/material/colors";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";

const Facebooknavbr = () => {
  return (
    <Card style={{ marginTop: "1rem" }}>
      <Grid container spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: deepPurple[500], margin: "1rem" }}>F</Avatar>
        <TextField
          style={{
            width: "20rem",
            borderRadius: "50rem",
            marginLeft: "2rem",
            marginRight: "10rem",
          }}
          type="text"
          label="Search facebook"
        />
        <Card style={{marginLeft:'2rem', marginRight: "40rem" }}>
          <HomeIcon style={{ marginRight: "5rem" ,fontSize:'2rem',color:'blue'}} />
          <AddToQueueIcon style={{ marginRight: "5rem" ,fontSize:'2rem'}} />
          <StorefrontIcon style={{ marginRight: "5rem",fontSize:'2rem' }} />
          <Diversity2Icon style={{ marginRight: "5rem" ,fontSize:'2rem'}} />
          <VideogameAssetIcon style={{ fontSize:'2rem'}} />
        </Card>
        <MenuIcon style={{ marginRight: "2rem" ,fontSize:'2rem'}} />
        <MessageIcon style={{ marginRight: "2rem" ,fontSize:'2rem'}} />
        <NotificationsIcon style={{ marginRight: "2rem" ,fontSize:'2rem'}} />
      </Grid>
    </Card>
  );
};

export default Facebooknavbr;
