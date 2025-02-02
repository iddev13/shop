import { create } from "zustand";

export type OpenHeaderProfileState = {
  currentTab: "sign-in" | "sign-up";
  isOpen: boolean;
  setCurrentTab: (value: "sign-in" | "sign-up") => void;
  onOpen: () => void;
  onClose: () => void;
};

export const useHeaderProfile = create<OpenHeaderProfileState>((set) => ({
  currentTab: "sign-in",
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  setCurrentTab: (value) => set({ currentTab: value }),
  onClose: () => set({ isOpen: false }),
}));
