import React from "react";

import noImage from "assets/images/no-image.png";

import cls from "./card.module.scss";

interface CardProps {
  title: string;
  author: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, author, image }) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls["card-image"]}>
        <img src={image ? image : noImage} alt="image" />
      </div>
      <div className={cls.content}>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Card;
