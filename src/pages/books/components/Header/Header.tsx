import React, { useState } from "react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import cls from "./header.module.scss";
import { Button, Modal } from "components";
import { useQueryClient } from "react-query";
import { http } from "services";
import { Constants, Hooks } from "modules/books";
import { Hooks as CreateHooks } from "modules/create-book";
import { toast } from "react-toastify";
import { Types } from "modules/books";
import { queryClient } from "main";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

interface SearchData {
  author: string;
  cover: string;
  isbn: string;
  published: number;
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [searchData, setSearchData] = useState<SearchData[]>([]);

  const searchMutation = Hooks.useSearchBooks();
  const createMutation = CreateHooks.useCreateBook();

  const handleSearch = () => {
    searchMutation.mutate(
      { title: search },
      {
        onSuccess: (data) => {
          console.log(data);
          setSearchData(data);
          setOpenModal(true);
        },
        onError: () => {
          toast.error("Cannot find this search items!");
        },
      }
    );
  };

  const handleAddBook = (isbn: string) => {
    createMutation.mutateAsync(
      { isbn },
      {
        onSuccess: () => {
          toast.success("Book successfully added!");
          queryClient
            .invalidateQueries(Constants.QueryKeys.BOOKS)
            .then(() => setOpenModal(false));
        },
        onError: (err) => {
          toast.error(err.response?.data.message);
        },
      }
    );
  };

  return (
    <div className={cls.wrapper}>
      <h1>Books</h1>

      <Modal
        title="Search results"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ul className={cls.list}>
          {searchData.map((item) => (
            <li key={item.isbn}>
              <div className={cls.content}>
                <img src={item.cover} alt={item.author} />
                <div>
                  <h4>
                    {item.title} {item.published}
                  </h4>
                  <p>{item.author}</p>
                  <p>{item.isbn}</p>
                </div>
              </div>
              <Button
                onClick={() => handleAddBook(item.isbn)}
                loading={createMutation.isLoading}
                className={cls.btn}
              >
                {!searchMutation.isLoading && "Get book"}
              </Button>
            </li>
          ))}
        </ul>
      </Modal>

      <div className={cls["search-box"]}>
        <div className={cls.search}>
          <SearchRoundedIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
        <Button
          loading={searchMutation.isLoading}
          onClick={handleSearch}
          className={cls.btn}
        >
          {!searchMutation.isLoading && <SearchRoundedIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Header;
