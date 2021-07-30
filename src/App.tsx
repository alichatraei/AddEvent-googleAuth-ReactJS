import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderLayout } from './Layout'
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="app" >
      <Suspense fallback={<div>لطفا صبر کنید...</div>}>
        <Router>
          <HeaderLayout />
          <Switch>
            {
              Routes.map((item, index) => {
                return (<Route key={index + 1} path={item.path} exact={item.exact}
                  render={(props) => {
                    return <item.page {...props} />
                  }} />)
              })
            }
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
