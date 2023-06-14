export namespace IEntity {
  export namespace Books {
    export type Main = Book[];

    export interface Book {
      book: {
        id: number;
        isbn: string;
        title: string;
        cover: string;
        author: string;
        published: number;
        pages: number;
      };
      status: number;
    }
  }
  export namespace Api {
    export namespace Get {
      export type Response = {
        data: IEntity.Books.Book[];
        isOk: boolean;
      };

      export type Request = {
        title: string;
      };
    }

    export namespace Edit {
      export interface Request {
        id: number;
        status: number;
      }
    }
    export namespace Delete {
      export type Request = Pick<Api.Edit.Request, "id">;
    }
  }
}

export namespace IApi {}
