"use client";
import { Button } from "@components/core/button";
import { Modal } from "@components/core/modal";
import { useDeleteModalStore } from "@stores/use-delete-modal-store";
import { DeleteModalTypes } from "./types";
import * as styles from "./styles/delete-modal.css";

export const DeleteModal = (props: DeleteModalTypes) => {
  const { description, handleDelete } = props;
  const { deleteModal, toggleDeleteModal } = useDeleteModalStore();
  const hasId = !!deleteModal.id;

  const handleClose = () => {
    toggleDeleteModal();
  };

  const onDelete = () => {
    if (!deleteModal.id) return;

    handleDelete(deleteModal.id);
    handleClose();
  };

  if (!hasId) return null;

  return (
    <Modal.Root open={deleteModal.open} onOpenChange={handleClose}>
      <Modal.Body className={styles.deleteModalBodyStyle}>
        <Modal.Content
          title={"Deletar"}
          description={description}
          className={styles.deleteModalContentStyle}
        >
          <Modal.Actions>
            <Button type="button" onClick={handleClose} variants="primary">
              Cancelar
            </Button>
            <Button type="button" onClick={onDelete} variants="danger">
              Deletar
            </Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal.Body>
    </Modal.Root>
  );
};
