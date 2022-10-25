import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import LeftSidebar from "./../components/LeftSidebar";
import Dashboard from "./../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ErrorManagement from "../components/ErrorManagement";

const ProceduresPage = React.lazy(() => import("mf_procedure/ProceduresPage"));

const routeList = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/tramites",
    element: (
      <ErrorManagement>
        <ProceduresPage />
      </ErrorManagement>
    ),
  },
];

const MainTemplate = () => {
  return (
    <>
      <div class="flex">
        <section className=" w-64 fixed left-0 top-0 h-screen bg-cyan-900 text-white text-center p-10">
          <h1 class="text-white text-center text-xl">Nombre Usuario.</h1>
          <PersonIcon style={{ fontSize: 96 }} />
          <button
            className="block w-full mt-2 mb-5 px-4 py-2 text-sm text-cyan-50 rounded-sm hover:bg-cyan-100
                     hover:text-cyan-800
                      hover:border-0
                      focus:outline-none
                      focus:bg-white
                      focus:text-cyan-800"
          >
            <ExitToAppIcon className="fas fa-sign-out-alt mr-2" />
            SALIR
          </button>
          <hr />
          <LeftSidebar />
        </section>
        <section class="flex-1 ml-64">
          <div class=" h-full p-10">
            <Routes>
              {routeList.map((routeItem) => {
                return (
                  <Route path={routeItem.path} element={routeItem.element} />
                );
              })}
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainTemplate;
