import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getBootcamps} from '../../../../js/actions/bootcampActions'
import BootcampCard from './BootcampCard'

function Bootcamps(props) {
  useEffect(()=> {
    getBootcamps();
    console.log(props.location.state.bootcamps)
  },[])
  const bootcampsMap = props.location.state.bootcamps
  
  return (
    <div>
     {bootcampsMap.map(bootcamp=><BootcampCard bootcamp={bootcamp} key={bootcamp._id}/>)}
    </div>
  )
}

export default Bootcamps

