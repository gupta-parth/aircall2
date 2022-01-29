import React from 'react';

import ActivityFeed from './components/ActivityFeed.jsx'
import Header from './components/Header.jsx';


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed />
      </div>
    </div>
  );
};



export default App;
