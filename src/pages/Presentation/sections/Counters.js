/*
=========================================================
* Empire Financial React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Empire Financial React components
import MKBox from "components/MKBox";

// Empire Financial React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon="lightbulb"
              title="Innovation"
              description="Always look to improve our talent, processes, and products. Be open to new ideas."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultInfoCard
              icon="stacked_line_chart"
              title="Innovation"
              description="Commit to achieve the best outcomes for our clients. Continuously track and measure everything and use it to always be improving. Be proactive, not reactive."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon="security"
              title="Innovation"
              description="Act professionally and positively. Build trust by doing what we say. Be upfront and communicate thoroughly."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
