import React, { useState } from "react";
import { Constants, Hooks, Types } from "modules/books";
import { BooksLayout } from "layouts";
import Header from "./components/Header/Header";

import cls from "./book.module.scss";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import noImage from "assets/images/no-image.png";
import { TextField } from "@mui/material";
import { Button } from "components";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { useBooks } from "modules/books/hooks";

const Books: React.FC = () => {
  const { state }: { state: Types.IEntity.Books.Book } = useLocation();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(state?.status);
  const queryClient = useQueryClient();

  const deleteMutation = Hooks.useDeleteBook();
  const editMutation = Hooks.useEditBook();

  const { book } = state || {};

  const handleDelete = () => {
    deleteMutation.mutate(
      { id: book.id },
      {
        onSuccess() {
          toast.success("Book successfully deleted!");
          navigate("/books");
        },
        onError(err) {
          console.log(err);
          toast.error(err.message);
        },
      }
    );
  };

  const handleEdit = () => {
    editMutation.mutate(
      { id: book.id, status: +editValue },
      {
        onSuccess(data) {
          setEditValue(data.status);
          toast.success("Book successfully edited!");
          setEdit(false);
          queryClient.invalidateQueries(Constants.QueryKeys.BOOKS);
        },
        onError(err) {
          console.log(err);
          toast.error(err.message);
        },
      }
    );
  };

  if (!state) return <Navigate to="/books" />;

  return (
    <BooksLayout>
      <div className={cls.wrapper}>
        <Header
          id={book.id}
          onEdit={() => setEdit(true)}
          onDelete={handleDelete}
          deleteLoading={deleteMutation.isLoading}
        />
        <div className="block">
          <div className={cls.info}>
            <div className={cls.image}>
              <img src={book.cover ? book.cover : noImage} alt="image" />
            </div>
            <div className={cls.content}>
              <h4>Title: {book.title ? book.title : "Not found"}</h4>
              <p>
                <span>Author: </span>
                {book.author ? book.author : "Not found"}
              </p>
              <p>
                <span>Published: </span> {book.published}
              </p>
              <p>
                <span>Pages: </span> {book.pages}
              </p>
              <p>
                <span>ISBN: </span> {book.isbn}
              </p>
              <div className={cls["edit-content"]}>
                <span>Status: </span>
                {edit ? (
                  <div className={cls.edit}>
                    <TextField
                      className={cls.input}
                      value={editValue}
                      onChange={(e) => setEditValue(+e.target.value)}
                      size="small"
                      placeholder="Status"
                      type="number"
                    />
                    <Button className={cls.btn} onClick={handleEdit}>
                      {!editMutation.isLoading && "Edit"}
                    </Button>
                  </div>
                ) : (
                  editValue
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BooksLayout>
  );
};

export default Books;
