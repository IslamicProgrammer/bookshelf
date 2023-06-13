import { useQuery } from "react-query";

import * as Types from "../types";
import * as Constants from "../constants";
import * as Api from "../api";

export const useBooks = () => {
  const initialData = {
    books: {},
  } as unknown as Types.IEntity.Books.Main;

  return useQuery<
    Types.IEntity.Books.Main,
    Types.IEntity.Books.Main,
    Types.IEntity.Books.Main
  >(
    [Constants.QueryKeys.BOOKS],
    async () => {
      const { data = initialData } = await Api.getAllBooks();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return data.data;
    },
    {
      keepPreviousData: true,
      retry: false,
    }
  );
};
