import { AxiosPromise } from "axios";
import { http } from "services";

import * as Types from "./types";

export const getAllBooks = (): AxiosPromise<Types.IEntity.Api.Response> =>
  http.request.get("/books", {
    headers: {},
  });
