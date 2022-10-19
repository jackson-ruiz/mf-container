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
];

const LeftSidebar = () => {
  return (
    <ul class="flex flex-col py-4 space-y-1">
      {menuList.map((menuItem) => {
        return (
          <li>
            <Link
              className="relative flex flex-row items-center h-11 text-cyan-50 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 pr-6"
              to={menuItem.route}
            >
              <span class="inline-flex justify-center items-center ml-4">
                {menuItem.icon}
              </span>
              <span class="ml-2 text-sm tracking-wide uppercase truncate">
                {menuItem.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LeftSidebar;
