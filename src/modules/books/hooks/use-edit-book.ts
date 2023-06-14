import { useMutation } from "react-query";

import * as Types from "../types";
import * as Constants from "../constants";
import * as Api from "../api";
import { AxiosError } from "axios";

export const useEditBook = () => {
  return useMutation<any, AxiosError, Types.IEntity.Api.Edit.Request>(
    [Constants.QueryKeys.SEARCH_BOOKS],
    async (payload) => {
      const { data } = await Api.editBook(payload);

      return data.data;
    }
  );
};
