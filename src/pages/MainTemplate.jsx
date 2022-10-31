import React from "react";
import Leftside from "../components/templateGrid/Leftside";
import ContentManager from "../components/templateGrid/ContentManager";

const MainTemplate = () => {
  return (
    <>
      <div className="flex">
        <section className=" w-64 fixed left-0 top-0 h-screen bg-cyan-900 text-white text-center p-10">
          <Leftside />
        </section>
        <section className="flex-1 ml-64">
          <ContentManager />
        </section>
      </div>
    </>
  );
};

export default MainTemplate;
