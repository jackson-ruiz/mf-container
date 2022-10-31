import React from "react";
import MainMenu from "../mainMenu/MainMenu";
import SessionInfo from "../user/SessionInfo";

const Leftside = () => {
  return (
    <>
      <SessionInfo />
      <hr />
      <MainMenu />
    </>
  );
};

export default Leftside;
