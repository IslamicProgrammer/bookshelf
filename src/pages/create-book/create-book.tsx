import { Button, Input } from "components";
import { Hooks } from "modules/books";
import React from "react";
import { useUser } from "store";

import { Forms, Types } from "modules/create-book";

import { BooksLayout } from "layouts";

const Books: React.FC = () => {
  const { logout } = useUser();

  const { data, isLoading, isError } = Hooks.useBooks();

  console.log(data);
  console.log(isError);

  return (
    <BooksLayout>
      <h1>Add Book</h1>
      <div className="block">
        <Forms.CreateBook>
          {({ control, formState }) => (
            <div>
              <Input<Types.CreateBook.Form.Create>
                control={control}
                name="isbn"
                errors={formState.errors}
                label="ISBN"
                size="small"
              />
              <Button
                loading={formState.isSubmitting}
                type="submit"
                variant="contained"
              >
                Create Book
              </Button>
            </div>
          )}
        </Forms.CreateBook>
      </div>
    </BooksLayout>
  );
};

export default Books;
