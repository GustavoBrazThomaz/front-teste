import { create } from "zustand";

type CentralModalType = {
  open: boolean;
  id?: string;
};

type CentralStoreType = {
  centralModal: CentralModalType;
  toggleCentralModal: (id?: string) => void;
  totalCentral: number;
  setTotalCentral: (total: number) => void;
  incTotalCentral: () => void;
  descTotalCentral: () => void;
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

  totalCentral: 0,

  setTotalCentral: (total) => set({ totalCentral: total }),

  incTotalCentral: () =>
    set((state) => ({ totalCentral: state.totalCentral + 1 })),

  descTotalCentral: () =>
    set((state) => ({ totalCentral: state.totalCentral - 1 })),
}));
