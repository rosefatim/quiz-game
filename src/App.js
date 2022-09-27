import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from './components/tabs/Page1';
import Page2 from './components/tabs/Page2';
import Page3 from './components/tabs/Page3';
import Page4 from './components/tabs/Page4';
import Page5 from './components/tabs/Page5';
import Page6 from './components/tabs/Page6';
import Page7 from './components/tabs/Page7';
import Page8 from './components/tabs/Page8';
import Error from './components/tabs/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Page1 /> </Route>
          <Route path="/page2"> <Page2 /> </Route>
          <Route path="/page3"> <Page3 /> </Route>
          <Route path="/page4"> <Page4/> </Route>
          <Route path="/page5"> <Page5/> </Route>
          <Route path="/page6"> <Page6/> </Route>
          <Route path="/page7"> <Page7/> </Route>
          <Route path="/page8"> <Page8/> </Route>
          <Route exact path="*"> <Error /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
