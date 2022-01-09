import "./App.css";
import Home from "./screen/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";

export const HOME = "/";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path={HOME} component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
