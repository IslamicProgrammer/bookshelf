import { useMutation } from "react-query";

import * as Types from "../types";
import * as Constants from "../constants";
import * as Api from "../api";
import { AxiosError } from "axios";

export const useDeleteBook = () => {
  return useMutation<any, AxiosError, Types.IEntity.Api.Delete.Request>(
    [Constants.QueryKeys.SEARCH_BOOKS],
    async (payload) => {
      const { data } = await Api.deleteBook(payload);

      return data.data;
    }
  );
};
