import { Container, Grid } from "@material-ui/core";
import { Footer } from "./compontent/Footer/Footer";
import Header from "./compontent/Header/Header";
import Profile from "./compontent/Profile/Profile.js";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Resume } from "./Pages/Resume/Resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import { PhotoGallery } from "./Pages/PhotoGallery/PhotoGallery";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile></Profile>
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content containeer_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                {/* <Route path="/photogallery">
                  <PhotoGallery />
                </Route> */}
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
