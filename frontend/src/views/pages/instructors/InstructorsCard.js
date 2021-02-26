import React, { useState } from "react";
import { useDispatch } from "react-redux";

function InstructorsCard({ user}) {

   const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="user-card" onMouseLeave={() => setShow(false)}>
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" /> <span>DELETE</span>
            <i className="fas fa-pen" />
          </li>
        </ul>
      )}
      <div className="avatar" style={{ background: "rgba(0,0,0,0.5)" }}>
        N
      </div>
      <div className="bootcamp-info">
        <p>
          <i className="fas fa-user">
            <span>{user.firstName}</span>
          </i>
        </p>

        <p>
          <i className="fas fa-envelope">
            <span>{user.phone}</span>
          </i>
        </p>

        <p>
          <i className="fas fa-phone">
            <span>phone</span>
          </i>
        </p>
      </div>
    </div>
  )
}

export default InstructorsCard
