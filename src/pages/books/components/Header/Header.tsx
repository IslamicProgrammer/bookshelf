import React from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import cls from "./header.module.scss";
import { Button } from "components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={cls.wrapper}>
      <h1>Dashboard</h1>

      <div className={cls["search-box"]}>
        <div className={cls.search}>
          <SearchRoundedIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Button className={cls.btn}>
          <SearchRoundedIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
