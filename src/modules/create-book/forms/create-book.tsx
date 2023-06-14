import React, { useEffect } from "react";
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
    /** The reason why I am using Promise here
     * I have to resolve function in error instead of reject
     * otherwise react-hook-forms isSubmitting is not gonna stop in error, which mean I cannot use it for loading and it loop forever
     */
    return await new Promise((resolve) => {
      createMutation.mutate(
        { isbn },
        {
          onSuccess: (data) => {
            console.log("data: ", data);
            toast.success("Book successfully created!");
            resolve(data);
          },
          onError: (err) => {
            toast.error(err.response?.data.message);
            resolve(err);
          },
        }
      );
    });
  };

  useEffect(() => {
    console.log(
      "formData.formState.isSubmitting: ",
      formData.formState.isSubmitting
    );
  }, [formData.formState.isSubmitting]);

  return (
    <form onSubmit={formData.handleSubmit(onSubmit)}>{children(formData)}</form>
  );
};

export default CreateBook;
