import { Button, Input } from "components";
import React from "react";

import { Forms, Types } from "modules/create-book";

import { BooksLayout } from "layouts";
import { Alert } from "@mui/material";

const Books: React.FC = () => {
  return (
    <BooksLayout>
      <h1>Add Book</h1>
      <div className="block">
        <Alert severity="warning">Please make sure enter valid ISBN data</Alert>

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
                {!formState.isSubmitting && "Create Book"}
              </Button>
            </div>
          )}
        </Forms.CreateBook>
      </div>
    </BooksLayout>
  );
};

export default Books;
