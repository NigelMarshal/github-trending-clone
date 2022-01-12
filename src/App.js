import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepoList from "./components/RepoList";
import DeveloperList from "./components/DeveloperList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <RepoList />
          </Route>
          <Route path="/developers">
            <DeveloperList />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
