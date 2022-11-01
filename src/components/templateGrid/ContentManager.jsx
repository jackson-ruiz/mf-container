import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorManagement from "./../errorManagement/ErrorManagement";
import Dashboard from "./../../pages/Dashboard";
const TabScreen = React.lazy(() => import("mf_procedure/TabScreen"));
const SamplePage = React.lazy(() => import("mf_procedure/SamplePage"));

const tabData = [
  {
    tabLabel: "Tab 1",
    tabLabelIcon: "",
    tabContent: "Contenido tab 1",
  },
  {
    tabLabel: "Tab 2",
    tabLabelIcon: "",
    tabContent: "Contenido tab 2",
  },
];

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
        <TabScreen data={tabData} />
      </ErrorManagement>
    ),
  },
  {
    key: 3,
    path: "/tramiteSample",
    element: (
      <ErrorManagement>
        <SamplePage />
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
