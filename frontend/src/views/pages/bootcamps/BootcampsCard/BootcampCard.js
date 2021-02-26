import React, { useState } from "react";
import { useDispatch } from "react-redux";
import bootcampsReducer from "../../../../js/Reducers/bootcampsReducer";
import "./BootcampCard-style.css";

const BootcampCard = ({bootcamps}) => {
  //user = { name , lastName , phone , email }
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div >
     {bootcamps.title}
    </div>
  );
};

export default BootcampCard;
