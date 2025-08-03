import { FC } from "react";
import * as styles from "./styles/undo-delete.css";
import { undoDeleteToastProps } from "./types";

export const UndoDeleteToast: FC<undoDeleteToastProps> = (props) => {
  const { closeToast, onUndo } = props;

  const handleUndo = () => {
    onUndo();
    if (closeToast) closeToast();
  };

  return (
    <div className={styles.undoDeleteStyle}>
      Deletado com sucesso.
      <button className={styles.undoDeleteButton} onClick={handleUndo}>
        Desfazer
      </button>
    </div>
  );
};
