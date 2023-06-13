import React from "react";

import cls from "./auth.module.scss";
import { Typography } from "@mui/material";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <Typography align="center" fontWeight="bold" fontSize={25}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
