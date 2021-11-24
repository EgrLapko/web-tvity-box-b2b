import React from "react";

import ModalContext from "./ModalContext";
import ModalWrapper from "./ModalWrapper";

const defaultState = {};

const ModalProvider = ({ children }) => {
  const [modals, setModals] = React.useState(defaultState);

  const onShow = React.useCallback((id, Modal, withClickAway, modalProps) => {
    setModals((modals) => ({
      ...modals,
      [id]: {
        id,
        Modal,
        modalProps,
        withClickAway,
        open: true,
      },
    }));
  }, []);

  const onClose = React.useCallback((id) => {
    setModals((modals) => ({
      ...modals,
      [id]: {
        ...modals[id],
        open: false,
      },
    }));
  }, []);

  const onExited = React.useCallback((id) => {
    setModals(({ [id]: exited, ...modals }) => ({
      ...modals,
    }));
  }, []);

  const createActions = React.useCallback(
      (Modal, withClickAway) => {
        const id = Math.random().toString(36);
        const show = (modalProps) =>
            onShow(id, Modal, withClickAway, modalProps);
        const close = () => onClose(id);

        return [show, close];
      },
      [onShow, onClose]
  );

  return (
      <ModalContext.Provider value={createActions}>
        {children}
        {Object.values(modals).map(
            ({ id, Modal, open, withClickAway, modalProps }) => (
                <ModalWrapper
                    key={id}
                    id={id}
                    Modal={Modal}
                    open={open}
                    withClickAway={withClickAway}
                    onClose={onClose}
                    onExited={onExited}
                    modalProps={modalProps}
                />
            )
        )}
      </ModalContext.Provider>
  );
};

export default React.memo(ModalProvider);
