import React from "react";

import { Hooks, Types } from "modules/books";
import Header from "./components/Header/Header";
import { Card } from "./components";
import { BooksLayout } from "layouts";
import { useNavigate } from "react-router-dom";

import cls from "./books.module.scss";

const Books: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = Hooks.useBooks();

  const handleClickCard = ({ book, status }: Types.IEntity.Books.Book) => {
    navigate(`/books/${book.id}`, {
      state: { book: { ...book }, status },
    });
  };

  return (
    <BooksLayout>
      <div className={cls.wrapper}>
        <Header />

        <div className="block">
          <h3>My books</h3>
          <div className={cls.books}>
            {isLoading ? (
              <p>Loading...</p>
            ) : data?.length ? (
              data?.map((item) => (
                <Card
                  key={item.book.id}
                  onClick={() => handleClickCard(item)}
                  title={item.book.title}
                  author={item.book.author}
                  image={item.book.cover}
                />
              ))
            ) : (
              <h1 className={cls["no-books"]}>No books</h1>
            )}
          </div>
        </div>
      </div>
    </BooksLayout>
  );
};

export default Books;
