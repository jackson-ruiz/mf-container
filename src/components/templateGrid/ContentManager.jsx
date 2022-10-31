import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorManagement from "./../errorManagement/ErrorManagement";
import Dashboard from "./../../pages/Dashboard";
const ProceduresPage = React.lazy(() => import("mf_procedure/ProceduresPage"));
const routeList = [
  {
    key: 1,
    path: "/",
    element: <Dashboard />,
  },
  {
    key: 2,
    path: "/tramites",
    element: (
      <ErrorManagement>
        <ProceduresPage />
      </ErrorManagement>
    ),
  },
];

const ContentManager = () => {
  return (
    <div className=" h-full p-10">
      <Routes>
        {routeList.map((routeItem) => {
          return (
            <Route
              key={routeItem.key}
              path={routeItem.path}
              element={routeItem.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default ContentManager;
