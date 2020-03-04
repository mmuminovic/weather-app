import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from './pages/auth/Auth';
import Weather from './pages/weather/Weather';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
