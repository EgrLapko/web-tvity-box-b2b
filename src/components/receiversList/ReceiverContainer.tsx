import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  createReceiver,
  getReceiver,
} from "store/reducers/receiverReducer/receiverActions";
import ReceiverContent from "./ReceiverContent";

const ReceiverContainer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, receiver } = useAppSelector(
    (state) => state.receiverReducer
  );

  const handleCreateReceiver = () => {
    dispatch(createReceiver(router.query.receiverId));
  };

  const handleSubmitReceiver = (values: any) => {
    console.log("SUBMITTED", values);
  };

  useEffect(() => {
    if (router.query.receiverId) {
      dispatch(getReceiver(router.query.receiverId));
    }
  }, [dispatch, router.query.receiverId]);

  return (
    <ReceiverContent
      receiversList={receiver?.data}
      isLoading={isLoading}
      onSubmit={handleSubmitReceiver}
      onCreate={handleCreateReceiver}
    />
  );
};

export default ReceiverContainer;
