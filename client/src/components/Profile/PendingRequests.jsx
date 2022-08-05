import React, { useEffect } from "react";
import ProfileNav from "./ProfileNav";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions";
import Loader from "../HomeComponents/Loader";
import s from "../styles/UserProfile.module.css";

export default function AirlinePendingRequests() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    setInterval(() => {}, 1000);
  }, [dispatch]);

  // getAllUsers()
  const users = useSelector((state) => state.allUsers);
  const currentUser = useSelector((state) => state.currentUser)[0];
  console.log(users);
  console.log(currentUser);
  return (
    <>
      {currentUser !== undefined ? (
        <div className={s.container}>
          <ProfileNav />
          <div className={s.infoContainer}>
            <h1 className={s.title}>Airline Pending Requests</h1>
            <h2>If there's any airlines wanting to parter up with us, those will wait here for an approval</h2>
          </div>
        </div>
      ) : (
        <div>
          <h1>{<Loader />}</h1>
        </div>
      )}
    </>
  );
}