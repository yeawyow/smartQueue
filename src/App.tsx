import React from "react";
import { Grid } from "@mui/material";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EmergencyRoom from "./pages/EmergencyRoom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Grid container>
          <Routes>
            <Route path="/erroom" element={<EmergencyRoom />}></Route>
          </Routes>
        </Grid>
      </BrowserRouter>
    </div>
  );
}
