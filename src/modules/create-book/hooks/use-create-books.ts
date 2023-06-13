import { useMutation } from "react-query";

import * as Types from "../types";
import * as Api from "../api";
import { AxiosError } from "axios";

export const useCreateBook = () =>
  useMutation<
    any,
    AxiosError<Types.CreateBook.Api.Error>,
    Types.CreateBook.Api.Request,
    Types.CreateBook.Api.Response
  >((data) => Api.createBook(data));
