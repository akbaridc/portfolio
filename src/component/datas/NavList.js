import { BsPerson, BsBook, BsFile, BsTelephone } from "react-icons/bs";
import { GoHome } from "react-icons/go";

export const navlist = [
  {
    path: "",
    route: "/",
    icon: <GoHome />,
  },
  {
    path: "About",
    route: "/about",
    icon: <BsPerson />,
  },
  {
    path: "Experience",
    route: "/experience",
    icon: <BsBook />,
  },
  {
    path: "Project",
    route: "/project",
    icon: <BsFile />,
  },
  {
    path: "Contact",
    route: "/contact",
    icon: <BsTelephone />,
  },
];
