import { useMutation, useQuery } from "react-query";

import { CreateUser } from "../api";
import { Types } from "..";
import { AxiosError } from "axios";

export const useCreateUser = () =>
  useMutation<any, AxiosError<Types.Api.User.Error>, Types.Api.User.Response>(
    (data) => CreateUser(data)
  );
