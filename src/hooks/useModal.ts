import React from "react";
import { ModalContext } from "components/common/ModalManager";

const useModal = (Modal: any, withClickAway = true) => {
  const createActions: any = React.useContext(ModalContext);
  if (!createActions) {
    throw new Error("useModal must be used within a modal provider");
  }

  return React.useMemo(
    () => createActions(Modal, withClickAway),
    [createActions, Modal, withClickAway]
  );
};

export default useModal;
