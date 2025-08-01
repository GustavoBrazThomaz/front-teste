import { create } from "zustand";

type deleteModalType = {
  open: boolean;
  id: string | undefined;
};

type deleteModalStore = {
  deleteModal: deleteModalType;
  toggleDeleteModal: (id?: string) => void;
};

export const useDeleteModalStore = create<deleteModalStore>()((set) => ({
  deleteModal: { open: false, id: undefined },
  toggleDeleteModal: (id) =>
    set((state) => ({
      deleteModal: {
        open: !state.deleteModal.open,
        id: id ?? undefined,
      },
    })),
}));
