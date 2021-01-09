import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Home = () => {
  const [loged, setLoged] = useState(false);
  if (!loged) {
    return <Redirect to={"/login"} />;
  }
  return (
    <>
      <h1> Home </h1>
    </>
  );
};

