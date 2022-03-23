import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Index from '@pages/index';

const RoutesWrp = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Index/>}></Route>
      </Routes>
    </>
  )
}

function App() {
return (
  <Router>
      <RoutesWrp />
  </Router>
);
}

export default App;
