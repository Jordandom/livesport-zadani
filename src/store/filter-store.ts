import { create } from 'zustand';

export type FilterStore = {
  query: string;
  typeIds: string;
  actions: {
    setQuery: (query: string) => void;
    setTypeIds: (typeIds: string) => void;
  };
};

enum DefaultFilter {
  Query = 'aa',
  TypeIds = '1,2,3,4',
}

export const useFilterStore = create<FilterStore>((set) => ({
  query: DefaultFilter.Query,
  typeIds: DefaultFilter.TypeIds,
  actions: {
    setQuery: (query) => {
      set({ query });
    },
    setTypeIds: (typeIds) => {
      set({ typeIds });
    },
  },
}));

export const useFilterActions = () => useFilterStore((state) => state.actions);
export const useFilterQuery = () => useFilterStore((state) => state.query);
export const useFilterTypeIds = () => useFilterStore((state) => state.typeIds);
