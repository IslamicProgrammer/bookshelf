import React from "react";

import cls from "./header.module.scss";
import { Button } from "components";
import { Link } from "react-router-dom";

interface HeaderProps {
  id: number;
  onEdit: () => void;
  onDelete: () => void;
  deleteLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({
  id,
  onEdit,
  onDelete,
  deleteLoading,
}) => {
  return (
    <div className={cls.wrapper}>
      <h1>
        <Link to="/books">Books</Link> / {id}
      </h1>

      <div className={cls.buttons}>
        <Button
          loading={deleteLoading}
          className={cls.delete}
          onClick={onDelete}
        >
          {!deleteLoading && "Delete"}
        </Button>
        <Button className={cls.edit} onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Header;
