import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  createReceiver,
  getReceiver,
} from "store/reducers/receiverReducer/receiverActions";
import ReceiverContent from "./ReceiverContentForm";

const ReceiverContainer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, receiver } = useAppSelector(
    (state) => state.receiverReducer
  );

  const handleCreateReceiver = () => {
    dispatch(createReceiver(router.query.receiverId));
  };

  const handleSubmitReceiver = () => {
    console.log("SUBMITTED");
  };

  useEffect(() => {
    if (router.query.receiverId) {
      dispatch(getReceiver(router.query.receiverId));
    }
  }, [dispatch, router.query.receiverId]);

  return (
    <ReceiverContent
      onSubmit={handleSubmitReceiver}
      onCreate={handleCreateReceiver}
    />
  );
};

export default ReceiverContainer;
