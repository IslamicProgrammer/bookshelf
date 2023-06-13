import { Button, Input } from "components";
import { Hooks } from "modules/books";
import React from "react";

import { BooksLayout } from "layouts";

import cls from "./books.module.scss";
import { Card } from "./components";

const Books: React.FC = () => {
  const { data, isLoading, isError } = Hooks.useBooks();

  console.log(data);
  console.log(isError);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <BooksLayout>
      <div className={cls.wrapper}>
        <div className="block">
          <h3>Books</h3>
          <div className={cls.books}>
            {data?.map((item) => (
              <Card
                title={item.book.title}
                author={item.book.author}
                image={item.book.cover}
              />
            ))}
          </div>
        </div>
      </div>
    </BooksLayout>
  );
};

export default Books;
