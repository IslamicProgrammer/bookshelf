import React from "react";

import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";

import cx from "classnames";
import cls from "./books.module.scss";
import { useUser } from "store";

interface BooksLayoutProps {
  children: React.ReactNode;
}

const paths = [
  {
    icon: SpaceDashboardIcon,
    path: "/books",
    title: "Books",
  },
  {
    icon: AddBoxIcon,
    path: "/books/create",
    title: "Create Book",
  },
];

const BooksLayout: React.FC<BooksLayoutProps> = ({ children }) => {
  const location = useLocation();
  const { logout } = useUser();

  return (
    <div className={cls.wrapper}>
      <div className={cls.sidebar}>
        <div className={cls["sidebar-items"]}>
          <img src={logo} alt="logo" className={cls.logo} />
          <div className={cls.icons}>
            {paths.map((item) => (
              <Link
                className={cx(
                  cls.link,
                  item.path === location.pathname && cls.active
                )}
                to={item.path}
              >
                <item.icon width={70} height={70} />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={cls.logout} onClick={logout}>
          <LogoutOutlinedIcon />
        </div>
      </div>
      <div className={cls.content}>{children}</div>
    </div>
  );
};

export default BooksLayout;
