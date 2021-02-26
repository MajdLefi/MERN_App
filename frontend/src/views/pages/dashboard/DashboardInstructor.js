import React from "react";
import { useSelector, useDispatch } from "react-redux";
import instructorLogo from "../../../images/instructorLogo.png";


const DashboardInstructor = () => {
  const user = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);


  return (
    <div>
      <div className="dashboard-container">
        <div className="title-container">
          <img src={instructorLogo} alt="hello-img" />
          <div className="greeting-container">
            <h1>Hello {user.firstName}</h1>
            <p>Welcome to your dashboard</p>
          </div>
        </div>

        <div className="cards-container">
          <div className="cards">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="primary-text">Number of students</p>
              <span className="font-bold text-title">555</span>
            </div>
          </div>

          <div className="cards">
            <i
              className="fa fa-calendar-o fa-2x text-red"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="primary-text-p">Students</p>
              <span className="font-bold text-title">98</span>
            </div>
          </div>

          <div className="cards">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card-inner">
              <p className="text-primary-p">Number of Instructors</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInstructor;
