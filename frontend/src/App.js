import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./js/actions/authActions";
import NavBar from "./views/navbar/NavBar";
import Home from "./views/pages/home/Home";
import BootcampsPage from "./views/pages/bootcamps/BootcampsPage/BootcampsPage"
import Dashboard from "./views/pages/dashboard/Dashboard";
import Instructors from "./views/pages/instructors/Instructors"
import Bootcamps from './views/pages/bootcamps/BootcampsAdmin/Bootcamps'
import Students from './views/pages/students/Students'
import BootcampsCard from "./views/pages/bootcamps/BootcampsCard/BootcampCard";
import PrivateRoute from "./routes/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedBacks from "./views/pages/feedbacks/FeedBacks";
import FollowUs from "./views/pages/followUs/FollowUs";
import { getBootcamps } from '../src/js/actions/bootcampActions'

function App() {
  const dispatch = useDispatch();
  const getAllBootcamps = () => dispatch(getBootcamps());
  useEffect(() => {
    getAllBootcamps();
  }, []);
  
  return (
    <BrowserRouter>
      <NavBar />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bootcamps/list" component={BootcampsPage} />
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/dashbaord/bootcamps" component={Bootcamps}/>
        <PrivateRoute path="/dashbaord/students" component={Students} />
        <PrivateRoute path="/dashbaord/instructors" component={Instructors}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
