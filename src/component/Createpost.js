import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styles } from "./style";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";

const Createpost = () => {
  return (
    <Card sx={{ padding: "5rem" }}>
      <Grid container spacing={2} alignItems="center">
        <Avatar alt="Remy Sharp" style={{marginTop:'10px'}} src="/static/images/avatar/1.jpg" />
        <Typography variant="h1" style={{fontSize:'2rem',marginLeft:'5px'}}>
          Routine of Nepal Banda
        </Typography>
      </Grid>

      <Typography variant="h1" style={{ fontSize: "1rem", width: "20rem",marginTop:'10px' }}>
        21 Yrs Old Yashasvi Jaiswal from India scores 100 in his test debut
        against West Indies & playing on 143 at the end of day 2. He was also
        highly appreciated during the IPL season for his brilliant performance.
        He has struggled a lot to become one of the rising stars in cricket. He
        sold Pani-Puri in the street & also worked as a cook and cleaner in a
        dairy and also lived in a tent without electricity and a toilet. He
        chose his career and goals instead of other things in life and is now
        creating history.
      </Typography>
      <Grid container spacing={0} alignItems="center" style={{marginTop:'10px'}}>
        <Button
          style={styles.buttonstl}
          variant="contained"
          // onClick={handleClick}
          // disabled={!task.length}
        >
          <ThumbUpIcon />
          <b>Like</b>
        </Button>
        <Button
          style={styles.buttonstl}
          variant="contained"
          // onClick={handleClick}
          // disabled={!task.length}
        >
          <ModeCommentIcon />
          <b>Comment</b>
        </Button>
        <Button
          style={styles.buttonstl}
          variant="contained"
          // onClick={handleClick}
          // disabled={!task.length}
        >
          <ScreenShareIcon />
          <b>Share</b>
        </Button>
      </Grid>
    </Card>
  );
};

export default Createpost;
