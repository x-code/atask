import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRepository } from "../../actions";
import "./accordion.scss"


const Accordion = ({ name }) => {
  const [isActive, setIsActive] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const dispatch = useDispatch();

  const handleUserRepository = (user) => {
    dispatch(userRepository(user))
        .then((response) => {
          setRepositories(response)
        })
        .catch((err) => {
          console.log("err", err);
        });
  };

  return (
    <>
    <div className="accordion-item mt-2">
      <div className="accordion-title"
        onClick={() => {
        handleUserRepository(name)
        setIsActive(!isActive)}
        }>
        <div>{name}</div>
        <div>{isActive ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</div>
      </div>
      {isActive && 
      <div className="accordion-content">
         {repositories.map((row, index) => (
            <div className="card mt-1 mb-1" key={index}>
              <div className="card-body">
                <h5>{row.name}</h5>
                <div className="pull-right">
                  <p> {row.stargazers_count} <i className="fa fa-star" aria-hidden="true"></i></p>
                </div>
                <p>{row.description}</p>
              </div>
            </div>
          ))}
      </div>
      }
    </div>
    </>
  );
};

export default Accordion;