import React, { Component } from "react";
import { Grid, Cell } from "styled-css-grid";
import Showcase from "./components/Showcase";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid columns="repeat(auto-fit,minmax(300px,250px))">
          <Cell center>
            <Showcase />
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
