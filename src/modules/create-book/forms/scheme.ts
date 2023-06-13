import * as yup from "yup";

export const createBookScheme = yup.object().shape({
  isbn: yup.string().required().label("ISBN"),
});
