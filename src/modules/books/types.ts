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
    export type Response = {
      data: IEntity.Books.Book[];
      isOk: boolean;
    };
  }
}

export namespace IApi {}
