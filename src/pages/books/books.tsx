import { Button, Input } from "components";
import { Hooks } from "modules/books";
import React from "react";

import { BooksLayout } from "layouts";

import cls from "./books.module.scss";
import { Card } from "./components";
import Header from "./components/Header/Header";
import { Box, Grid } from "@mui/material";

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
        <Header />

        <div className="block">
          <h3>Books</h3>
          <div className={cls.books}>
            {/* <Grid container wrap="wrap" gap={2} justifyContent="space-between"> */}
            {data?.map((item) => (
              <Box sx={{ width: 210, marginRight: 0.5 }}>
                <Card
                  title={item.book.title}
                  author={item.book.author}
                  image={item.book.cover}
                />
              </Box>
            ))}
            {/* </Grid> */}
          </div>
        </div>
      </div>
    </BooksLayout>
  );
};

export default Books;
