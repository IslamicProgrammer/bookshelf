import React from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import cls from "./header.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.left}>
        <h1>Dashboard</h1>
      </div>
      <div className={cls.search}>
        <SearchRoundedIcon />
        <input type="text" />
      </div>
    </div>
  );
};

export default Header;
