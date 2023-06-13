export declare namespace CreateBook {
  export namespace Api {
    export interface Request {
      isbn: string;
    }

    export interface Response {
      author: string;
      cover: string;
      id: number;
      isbn: string;
      pages: number;
      published: number;
      title: string;
    }

    export interface Request {
      isbn: string;
    }

    export interface Error {
      isOk: boolean;
      message: string;
    }
  }

  export namespace Form {
    export type Create = Api.Request;
  }
}
