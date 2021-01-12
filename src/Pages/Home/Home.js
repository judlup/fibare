import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // if (!auth) {
  //   return <Redirect to={"/"} />;
  // }
  return (
    <>
      <h1> Home </h1>
      {auth ? <h6>Valuable information I shouldn't see</h6> : ""}
    </>
  );
};
