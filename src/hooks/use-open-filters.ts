import { create } from 'zustand';

type FiltersState = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

export const useOpenFilters = create<FiltersState>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
