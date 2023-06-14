import { AxiosPromise } from "axios";
import { http } from "services";

import * as Types from "./types";

export const getAllBooks = (): AxiosPromise<Types.IEntity.Api.Get.Response> =>
  http.request.get("/books", {
    headers: {},
  });

export const searchBooks = ({
  title,
}: Types.IEntity.Api.Get.Request): AxiosPromise<Types.IEntity.Api.Get.Response> =>
  http.request.get(`/books/${title}`);

export const editBook = ({
  status,
  id,
}: Types.IEntity.Api.Edit.Request): AxiosPromise<Types.IEntity.Api.Get.Response> =>
  http.request.patch(`/books/${id}`, { status });

export const deleteBook = ({
  id,
}: Types.IEntity.Api.Delete.Request): AxiosPromise<Types.IEntity.Api.Get.Response> =>
  http.request.delete(`/books/${id}`);
