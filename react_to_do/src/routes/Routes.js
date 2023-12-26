import { Route, Redirect } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";
import MainPage from "../pages/mainPage/MainPage";
import ViewPage from "../pages/viewPage/ViewPage";
import Login from "../pages/login/login";
import NotFound from "../pages/notfound/NotFound";
import { BrowserRouter, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={MainPage} exact />

        <Route path="/add" exact>
          <AddToDo />
        </Route>

        <Route path="/login" component={Login} />

        <Route path="/view/:id" component={ViewPage} />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
