import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../js/actions/userActions";
import "./Instructors.css";
import InstructorsCard from "./InstructorsCard";

const Instructors = (props) => {
  useEffect(() => {
    console.log(props.location.state.users);
    getUsers();
  }, []);
  const usersMap = props.location.state.users;
  const instructors = usersMap.filter((word) => word.role[0] === "Instructor");

  return (
    <div>
      {instructors.map((user) => (
        <InstructorsCard user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Instructors;
