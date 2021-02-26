import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBootcamps } from "../../../../js/actions/bootcampActions";
import BootcampCard from "../BootcampsCard/BootcampCard";

const BootcampsList = () => {
  const { bootcamps, loading } = useSelector((state) => state);

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

export default BootcampsList;
