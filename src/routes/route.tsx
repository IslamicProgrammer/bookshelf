import { Route as BaseRoute, Navigate, Routes } from "react-router-dom";
import * as Pages from "pages";
import { useUser } from "store";

function PrivateRoute({ user, children }: any) {
  if (!user?.email) {
    return <Navigate to="/" />;
  }

  return children;
}
const Route = () => {
  const { user } = useUser();

  return (
    <Routes>
      <BaseRoute
        path="/books"
        element={
          <PrivateRoute user={user}>
            <Pages.Books />
          </PrivateRoute>
        }
      />
      <BaseRoute
        path="/books/create"
        element={
          <PrivateRoute user={user}>
            <Pages.CreateBook />
          </PrivateRoute>
        }
      />
      <BaseRoute
        path="/"
        element={!user ? <Pages.Auth /> : <Navigate to="/books" />}
      />
      <BaseRoute path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Route;
