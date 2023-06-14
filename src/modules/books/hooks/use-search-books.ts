/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation, useQuery } from "react-query";

import * as Types from "../types";
import * as Constants from "../constants";
import * as Api from "../api";
import { AxiosError } from "axios";

export const useSearchBooks = () => {
  const initialData = [] as unknown as Types.IEntity.Books.Main[];

  return useMutation<any, AxiosError<any>, { title: string }>(
    [Constants.QueryKeys.SEARCH_BOOKS],
    async ({ title }) => {
      const { data = initialData } = await Api.searchBooks({ title });

      // @ts-ignore
      return data.data;
    }
  );
};
