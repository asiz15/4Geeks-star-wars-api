import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { CharacterDetails } from './pages/CharacterDetails.js'
import {DataProvider} from './context/DataContext.js';
import { PlanetDetails } from './pages/PlanetDetails';

function App() {
  return (
    <div className="App text-white">
      <DataProvider>
      <Header/>
      <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home"  />
              <Route exact path="/character/:id" component={CharacterDetails}/>
              <Route exact path="/planet/:id" component={PlanetDetails}/>
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
        </DataProvider>
    </div>
  );
}

export default App;
