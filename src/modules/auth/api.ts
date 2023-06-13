import { http } from "services";

import * as Types from "./types";
import { AxiosPromise } from "axios";

export const CreateUser = (
  data: Types.Form.Create
): AxiosPromise<Types.Api.User.Response> => http.request.post("/signup", data);
