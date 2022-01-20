import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  createReceiver,
  getReceiver,
  getReceiverName,
} from "store/reducers/receiverReducer/receiverActions";
import ReceiverContent from "./ReceiverContent";

const ReceiverContainer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, receiver, receiverName, isCreating } = useAppSelector(
    (state) => state.receiverReducer
  );

  const handleSubmitReceiver = (values: any) => {
    dispatch(
      createReceiver({ id: router.query.receiverId, values: values.receivers })
    );
  };

  useEffect(() => {
    if (router.query.receiverId) {
      dispatch(getReceiver(router.query.receiverId));
    }
  }, [dispatch, router.query.receiverId]);

  useEffect(() => {
    if (router.query.receiverId) {
      dispatch(getReceiverName(router.query.receiverId));
    }
  }, [dispatch, router.query.receiverId]);

  return (
    <ReceiverContent
      receiversList={receiver?.data}
      title={receiverName?.registryName}
      isLoading={isLoading}
      isSending={isCreating}
      onSubmit={handleSubmitReceiver}
    />
  );
};

export default ReceiverContainer;
