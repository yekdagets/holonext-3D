
import React from "react";
import './home.css'

import "./slider.css";
import { Typography,Grid,Stack} from "@mui/material";
import Slider from "../Slider";



export default function Home() {
 
  return (
    <Grid
      container
      sx={{
        marginTop: "100px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Grid item xs={6} md={6} lg={8}>
        <Stack>
          <h1>Holo Next 3D Viewer</h1>
        </Stack>
        <Slider />
      </Grid>
    </Grid>
  );
}