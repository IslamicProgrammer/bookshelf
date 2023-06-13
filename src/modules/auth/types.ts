/* eslint-disable @typescript-eslint/no-namespace */

export declare namespace Form {
  export interface Create {
    name: string;
    email: string;
    secret: string;
  }
}

export declare namespace Api {
  export namespace User {
    export interface Response {
      name: string;
      email: string;
      key: string;
      secret: string;
    }

    export interface Error {
      isOk: boolean;
      message: string;
    }
  }
}
