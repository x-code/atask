import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../../actions";
import Accordion from '../../components/accordion';
import "./profile.scss";

const Profile = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const handleSearchUser = (e) => {
      e.preventDefault();
      dispatch(searchUser(search))
        .then((response) => {
          setUsers(response.items)
          setResult(search)
        })
        .catch((err) => {
          console.log("err", err);
        });
  };

  return (
    <>
      <section className="mt-3">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <form className="form" onSubmit={handleSearchUser}>
                    <div className="row mt-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter username"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <button
                          className="btn btn-primary btn-search"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="row mt-3">
                    <div className="col">
                    {result ? <>Showing users for {result}</> : <></>}
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                    {users.map((row, index) => (

                      <Accordion key={index} indexUser={index} idUser={row.id} name={row.login} />
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
