import { Route as BaseRoute, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  element: JSX.ElementType;
  isAuth: boolean;
}

const PrivateRoute = ({
  path,
  element: Element,
  isAuth,
}: PrivateRouteProps) => {
  return (
    <BaseRoute
      path={path}
      element={isAuth ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
