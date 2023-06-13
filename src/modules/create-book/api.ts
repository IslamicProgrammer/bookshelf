import { AxiosPromise } from "axios";
import { http } from "services";

import * as Types from "./types";

export const createBook = (
  data: Types.CreateBook.Api.Request
): AxiosPromise<Types.CreateBook.Api.Response> =>
  http.request.post("/books", { isbn: data.isbn });
