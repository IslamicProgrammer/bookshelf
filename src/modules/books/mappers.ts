import get from "lodash/get";

import type * as Types from "./types";

export const Books = (
  data: Types.IEntity.Books.Main["data"]
): Types.IEntity.Books.Main => data.map((item) => ({}));
