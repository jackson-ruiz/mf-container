import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Link } from "react-router-dom";

const menuList = [
  {
    title: "Dashboard",
    icon: <AppsIcon />,
    route: "/",
  },
  {
    title: "Trámites",
    icon: <PostAddIcon />,
    route: "/tramites",
  },
  {
    title: "Trámites Ejemplo",
    icon: <PostAddIcon />,
    route: "/tramiteSample",
  },
];

const MainMenu = () => {
  return (
    <ul className="flex flex-col py-4 space-y-1">
      {menuList.map((menuItem, index) => {
        return (
          <li key={index + 1}>
            <Link
              key={menuItem.title}
              className="relative flex flex-row items-center h-11 text-cyan-50 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 pr-6"
              to={menuItem.route}
            >
              <span className="inline-flex justify-center items-center ml-4">
                {menuItem.icon}
              </span>
              <span className="ml-2 text-sm tracking-wide uppercase truncate">
                {menuItem.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
