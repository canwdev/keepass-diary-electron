import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // Link
} from "react-router-dom";

import AppBar from './components/AppBar'

import router from './router'
import {useSelector} from "react-redux"

function App() {
  let unlocked = useSelector(state => state.unlocked);
  return (
    <Router>
      {!unlocked ? <Redirect to="/login"/> : <Redirect to="/list"/>}
      <AppBar router={router}/>
      <div className="page-content">
        {
          router.map((item, index) => {
            return (
              <Route key={index} path={item.pathRoute || item.path} exact={item.exact} component={item.component}/>)
          })
        }
      </div>
    </Router>
  );
}

export default App;
