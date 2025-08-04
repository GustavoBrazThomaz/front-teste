import { create } from "zustand";

type CentralModalType = {
  open: boolean;
  id?: string;
};

type CentralStoreType = {
  centralModal: CentralModalType;
  toggleCentralModal: (id?: string) => void;
  centralsTotal: number;
  setCentralsTotal: (total: number) => void;
  incCentralsTotal: () => void;
  descCentralsTotal: () => void;
};

export const useCentralStore = create<CentralStoreType>()((set) => ({
  centralModal: { open: false, id: undefined },

  toggleCentralModal: (id) =>
    set((state) => ({
      centralModal: {
        open: !state.centralModal.open,
        id: id ?? undefined,
      },
    })),

  centralsTotal: 0,

  setCentralsTotal: (total) => set({ centralsTotal: total }),

  incCentralsTotal: () =>
    set((state) => ({ centralsTotal: state.centralsTotal + 1 })),

  descCentralsTotal: () =>
    set((state) => ({ centralsTotal: state.centralsTotal - 1 })),
}));
