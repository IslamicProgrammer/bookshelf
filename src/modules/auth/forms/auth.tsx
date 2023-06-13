import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";

import * as Types from "../types";
import * as Hooks from "../hooks";

import { authScheme } from "./scheme";
import { toast } from "react-toastify";
import { useUser } from "store";

interface AuthProps {
  defaultValues?: Partial<Types.Form.Create>;
  onSuccess?: () => void;
  children: (data: UseFormReturn<Types.Form.Create>) => React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children, defaultValues = {} }) => {
  const createMutation = Hooks.useCreateUser();
  const { setUser } = useUser();

  const formData = useForm<Types.Form.Create>({
    resolver: yupResolver(authScheme),
    defaultValues: {
      email: "",
      name: "",
      ...defaultValues,
    },
  });

  const onSubmit = (data: Types.Form.Create) => {
    createMutation.mutate(
      {
        email: data.email,
        key: data.secret,
        name: data.name,
        secret: data.secret,
      },
      {
        onSuccess: (data) => {
          console.log("data: ", data);

          setUser(data.data.data);
          toast.success("Successfully logged in");
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

export default Auth;
