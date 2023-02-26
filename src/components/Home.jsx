import React from "react";
import Doktorlar from "./Doktorlar";

const Home = () => {
  return (
    <>
      <small> Coded by mgCuriousCoders {new Date().getFullYear()}© </small>
      <Doktorlar />
    </>
  );
};

export default Home;
