import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./js/actions/authActions";
import NavBar from "./views/navbar/NavBar";
import Home from "./views/pages/home/Home";
import Dashboard from "./views/pages/dashboard/Dashboard";
import BootcampsCard from "./views/pages/bootcamps/BootcampsCard/BootcampCard";
import PrivateRoute from "./routes/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedBacks from "./views/pages/feedbacks/FeedBacks";
import FollowUs from "./views/pages/followUs/FollowUs";

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </switch>
      <BootcampsCard />
      <BootcampsCard />
      <BootcampsCard />
      <BootcampsCard />
      <BootcampsCard />
      <FeedBacks />
      <FollowUs />
    </BrowserRouter>
  );
}

export default App;
