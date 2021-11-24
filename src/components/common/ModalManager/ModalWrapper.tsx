import React from "react";

interface IProps {
  id: string;
  Modal: any;
  open: boolean;
  withClickAway: boolean;
  onClose: (id: string) => void;
  onExited: (id: string) => void;
  modalProps: any;
}

const ModalWrapper: React.FC<IProps> = ({
  id,
  Modal,
  open,
  withClickAway,
  onClose,
  onExited,
  modalProps,
}) => {
  const handleClose = (event: any, reason: string) => {
    if (!withClickAway && reason === "clickaway") {
      return;
    }

    if (modalProps && modalProps.onClose) {
      modalProps.onClose();
    }

    onClose(id);
  };

  const handleExited = () => {
    if (modalProps && modalProps.onExited) {
      modalProps.onExited();
    }

    onExited(id);
  };

  return (
    <Modal
      {...modalProps}
      open={open}
      onClose={handleClose}
      onExited={handleExited}
    />
  );
};

export default React.memo(ModalWrapper);
