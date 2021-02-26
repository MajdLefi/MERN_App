import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import adminLogo from "../../../images/adminLogo.png";
import { getUsers } from "../../../js/actions/userActions";
import { getBootcamps } from "../../../js/actions/bootcampActions";
import { Button } from "reactstrap";

const DashboardAdmin = () => {
  useEffect(() => {
    getAllBootcamps();
    console.log(getAllBootcamps);
  }, []);

  useEffect(() => {
    getAllUsers();
    console.log(getAllUsers);
  }, []);
  const users = useSelector((state) => state.usersReducer.users);
  const user = useSelector((state) => state.authReducer.user);
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);

  const dispatch = useDispatch();
  const getAllBootcamps = () => dispatch(getBootcamps());
  const getAllUsers = () => dispatch(getUsers());

  const numberOfStudents = users.filter((word) => word.role[0] === "Student")
    .length;
  const numberOfInstructors = users.filter(
    (word) => word.role[0] === " Instructor"
  ).length;
  const numberOfBootcamps = bootcamps.length;
  return (
    <div>
      <div className="dashboard-container">
        <div className="title-container">
          <img src={adminLogo} alt="hello-img" />
          <div className="greeting-container">
            <h1>Hello {user.firstName}</h1>
            <p>Welcome to your dashboard</p>
          </div>
        </div>

        <div className="cards-container">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="primary-text">Number of bootcamps</p>
              <span className="font-bold text-title">{numberOfBootcamps}</span>
              <Link
                to={{ pathname: "/dashbaord/bootcamps", state: { bootcamps } }}
              >
                <Button color="primary">Bootcamps</Button>{" "}
              </Link>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-calendar-o fa-2x text-red"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="primary-text-p">Number of Students</p>
              <span className="font-bold text-title">{numberOfStudents}</span>
              <Link to={{ pathname: "/dashbaord/students", state: { users } }}>
                <Button color="primary">Students</Button>{" "}
              </Link>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="text-primary-p">Number of Instructors</p>
              <span className="font-bold text-title">{numberOfBootcamps}</span>
              <Link
                to={{ pathname: "/dashbaord/instructors", state: { users } }}
              >
                <Button color="primary">Instructors</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
