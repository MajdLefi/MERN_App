import { Home } from "../src/pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth/Auth";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import Dashboard from "./pages/Home/Dashboard/Dashboard";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <PrivateRoutes path="/dashboard" component={Dashboard} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
