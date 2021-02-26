import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import './BootcampCard.css'
import BootcampsCard from "../BootcampsCard/BootcampCard";
import { getBootcamps } from "../../../../js/actions/bootcampActions";
import BootcampsList from "../BootcampsList/BootcampsList";
import bootcampsReducer from "../../../../js/Reducers/bootcampsReducer";

const BootcampsPage = () => {
  const bootcamps = useSelector((state) => state.bootcampsReducer.bootcamps);
  const dispatch = useDispatch();
  const getAllBootcamps = () => dispatch(getBootcamps());
  useEffect(() => {
    getAllBootcamps();
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default BootcampsPage;
