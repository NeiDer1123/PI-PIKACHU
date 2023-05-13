import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Navbar } from "./components";
import { Home, Landing, Detail, Form } from "./views";
import { Route } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
