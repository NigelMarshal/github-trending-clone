import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RepoList from "./components/Repositories/RepoList";
import DeveloperList from "./components/Developers/DeveloperList";
import NavBar from "./components/NavBar";
import Wrapper from "./components/UI/Wrapper";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gh-gray-800">
        <Header />
        <Wrapper className="container sm:container mx-auto">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Redirect to="/trending" />
              </Route>
              <Route path="/trending">
                <RepoList />
              </Route>
              <Route path="/developers">
                <DeveloperList />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Wrapper>
      </div>
    </QueryClientProvider>
  );
}

export default App;
