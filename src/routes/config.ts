import * as Pages from "pages";

interface IRoute {
  path: string;
  public?: boolean;
  element: React.FC | React.ReactNode;
}

export const pages: IRoute[] = [
  {
    element: Pages.Auth,
    public: true,
    path: "/",
  },
  {
    element: Pages.Login,
    public: true,
    path: "/",
  },
];
