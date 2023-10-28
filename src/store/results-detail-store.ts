import { create } from 'zustand';

export type ResultDetailStore = {
  name: string;
  image: string;
  defaultCountry: string;
  actions: {
    setName: (name: string) => void;
    setImage: (image: string) => void;
    setDefaultCountry: (defaultCountry: string) => void;
  };
};

export const useResultDetailStore = create<ResultDetailStore>((set) => ({
  name: '',
  image: '',
  defaultCountry: '',
  actions: {
    setName: (name) => {
      set({ name });
    },
    setImage: (image) => {
      set({ image });
    },
    setDefaultCountry: (defaultCountry) => {
      set({ defaultCountry });
    },
  },
}));

export const useResultDetailActions = () => useResultDetailStore((state) => state.actions);
export const useResultDetailName = () => useResultDetailStore((state) => state.name);
export const useResultDetailImage = () => useResultDetailStore((state) => state.image);
export const useResultDetailDefaultCountry = () => useResultDetailStore((state) => state.defaultCountry);
