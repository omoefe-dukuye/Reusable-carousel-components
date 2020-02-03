import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Carousel1 from './Components/Carousel1';
import Carousel2 from './Components/Carousel2';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/1" component={Carousel1} />
        <Route path="/2" component={Carousel2} />
        {/* <Route path="/3" component={} />
        <Route path="/4" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
