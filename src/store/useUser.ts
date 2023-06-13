import { create } from "zustand";
import { IStore } from "./types";

interface UserState {
  user: IStore.User | null;
  setUser: (user: IStore.User | null) => void;
  logout: () => void;
}

export const useUser = create<UserState>((set) => ({
  user: localStorage.getItem("user")
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem("user")!)
    : null,
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
