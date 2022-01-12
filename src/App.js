import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepoItem from "./components/RepoItem";
import DeveloperItem from "./components/DeveloperItem";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-6xl">GitHub Trending Clone</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Repositories</Link>
            </li>
            <li>
              <Link to="/developers">Developers</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <RepoItem />
          </Route>
          <Route path="/developers">
            <DeveloperItem />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
