import * as React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Header from './components/UI/Header';

import Home from './pages/Home'

function App() {

  return (
    <>
      <HashRouter>
        <div>
          <Route path="/" exact component={ Home } />
          {/* <Route path="/login" component={ Login } /> */}
        </div>
      </HashRouter>
    </>
  );
}

export default App;