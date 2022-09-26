import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from './components/tabs/Page1';
import Page2 from './components/tabs/Page2';
import Page3 from './components/tabs/Page3';
import Page4 from './components/tabs/Page4';
import Error from './components/tabs/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Page1 /> </Route>
          <Route path="/main"> <Page2 /> </Route>
          <Route exact path="*"> <Error /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
