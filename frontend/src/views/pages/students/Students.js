import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getUsers} from '../../../js/actions/userActions'
import StudentsCard from './StudentsCard'

function Students(props) {
  useEffect(() => {
    console.log(props);
    getUsers();
  }, []);
  const usersMap = props.location.state.users;
  const students = usersMap.filter(word => word.role[0] === "Student");
  return (
    <div>
       {students.map((user) => (
        <StudentsCard user={user} key={user._id} />
      ))}
    </div>
  );
}

export default Students;
