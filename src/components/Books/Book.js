import React from 'react';
import '../App.css';
import Story from '.';


const App = ({ stories }) =>
  <div className="app">
     <div className="stories">
    {(stories || []).map(x =>
        <Story story={x} />
    )}
  </div>
  </div>

export default App;