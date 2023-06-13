import { FC } from "react";
import { AuthLayout } from "layouts";
import { Forms } from "modules/auth";
import { Button, Input } from "components";
import { Form } from "modules/auth/types";
import { FieldError } from "react-hook-form";
import { Link } from "react-router-dom";

import cls from "./login.module.scss";

const Login: FC = () => {
  return (
    <AuthLayout title="Login">
      <Forms.AuthForm>
        {(data) => {
          const errors = data.formState.errors as Record<
            keyof Form.Create,
            FieldError
          >;
          return (
            <div className={cls.wrapper}>
              <Input<Form.Create>
                control={data.control}
                errors={errors}
                name="name"
                label="Name"
                size="small"
              />
              <Input<Form.Create>
                control={data.control}
                errors={errors}
                name="email"
                label="Email"
                size="small"
              />
              <Input<Form.Create>
                control={data.control}
                errors={errors}
                type="password"
                name="secret"
                label="Password"
                size="small"
              />
              <div className={cls.row}>
                <Link to="/">Are you new here ?</Link>
              </div>

              <Button size="large" type="submit" variant="contained">
                Submit
              </Button>
            </div>
          );
        }}
      </Forms.AuthForm>
    </AuthLayout>
  );
};

export default Login;
