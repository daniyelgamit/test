import './App.css';
import { Switch, Route } from 'react-router-dom';
import Test from "./Views/Test";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
      <Route exact path="/test2" component={() => (<h2>test 2</h2>)} />
    </Switch>
  );
}

export default App;
