import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carousel1 from './Components/Carousel1';
import Carousel2 from './Components/Carousel2';
import Carousel3 from './Components/Carousel3';
import Carousel4 from './Components/Carousel4';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/1" component={Carousel1} />
        <Route path="/2" component={Carousel2} />
        <Route path="/3" component={Carousel3} />
        <Route path="/4" component={Carousel4} />
        <Route path="/5" component={Grid} />
      </Router>
    </div>
  );
}

export default App;
