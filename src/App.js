import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/admin-pages/Dashboard";
import Profile from "./pages/admin-pages/Profile";
import Trees from "./pages/admin-pages/Trees";
import Vegetables from "./pages/admin-pages/Vegetables";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/user-pages/Home";
import Farm from "./pages/user-pages/Farm";
import RegistrationForm from "./pages/RegistrationForm";
import Orders from "./pages/user-pages/Orders";
import Adoptions from "./pages/user-pages/Adoptions";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <RegistrationForm />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/vegetables">
        <Vegetables />
      </Route>
      <Route path="/trees">
        <Trees />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/farm/:farmId">
        <Farm />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/adoptions">
        <Adoptions />
      </Route>
    </Switch>
  );
}

export default App;
