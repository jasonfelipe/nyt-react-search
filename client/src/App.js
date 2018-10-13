import React from 'react';
import Article from "./pages/Articles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path='/' component={Article} />
      </Wrapper>
    </div>
  </Router>
)

export default App;
