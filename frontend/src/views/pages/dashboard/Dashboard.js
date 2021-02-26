import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import "./Dashboard.css";
import adminLogo from "../../../images/adminLogo.png";
import Home from "../home/Home";
import DashboardAdmin from "../dashboard/DashboardAdmin";
import DashboardInstructor from "../dashboard/DashboardInstructor";
import DashboardStudent from "../dashboard/DashboardStudent";
import { getUsers } from "../../../js/actions/userActions";

const Dashboard = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (user && isAuth && user.role[0] === "Admin") {
    return <DashboardAdmin />;
  } else if (user && isAuth && user.role[0] === "Instructor") {
    return <DashboardInstructor />;
  } else if (user && isAuth && user.role[0] === "Student") {
    return <DashboardStudent />;
  }

  return <div></div>;
};

export default Dashboard;
