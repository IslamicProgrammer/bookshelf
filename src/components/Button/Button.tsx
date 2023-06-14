import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

import React from "react";

import cx from "classnames";

import cls from "./button.module.scss";

const Button: React.FC<LoadingButtonProps> = ({ ...args }) => {
  return <LoadingButton {...args} className={cx(args.className, cls.button)} />;
};

export default Button;
