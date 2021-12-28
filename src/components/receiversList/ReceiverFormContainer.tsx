import React from "react";
import ReceiverFormContent from "./ReceiverFormContent";

interface ReceiverFormContainerProps {
  receiver: any;
  index: number;
  onRemove: (index: number) => void;
}

const ReceiverFormContainer: React.FC<ReceiverFormContainerProps> = ({
  receiver,
  index,
  onRemove,
}) => {
  return (
    <ReceiverFormContent
      index={index}
      receiver={receiver}
      onRemove={onRemove}
    />
  );
};

export default ReceiverFormContainer;
