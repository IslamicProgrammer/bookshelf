import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";

import * as Types from "../types";
import * as Hooks from "../hooks";

import { createBookScheme } from "./scheme";
import { toast } from "react-toastify";

interface CreateBookProps {
  defaultValues?: Partial<Types.CreateBook.Form.Create>;
  onSuccess?: () => void;
  children: (
    data: UseFormReturn<Types.CreateBook.Form.Create>
  ) => React.ReactNode;
}

const CreateBook: React.FC<CreateBookProps> = ({
  children,
  defaultValues = {},
}) => {
  const createMutation = Hooks.useCreateBook();

  const formData = useForm<Types.CreateBook.Form.Create>({
    resolver: yupResolver(createBookScheme),
    defaultValues: { isbn: "", ...defaultValues },
  });

  const onSubmit = async ({ isbn }: Types.CreateBook.Form.Create) => {
    await createMutation.mutateAsync(
      { isbn },
      {
        onSuccess: (data) => {
          console.log("data: ", data);

          toast.success("Book successfully created!");
        },
        onError: (err) => {
          toast.error(err.response?.data.message);
        },
      }
    );
  };

  return (
    <form onSubmit={formData.handleSubmit(onSubmit)}>{children(formData)}</form>
  );
};

export default CreateBook;
