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

  const { isLoading, receiver, isCreating, isFulfilled } = useAppSelector(
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
    if (!isCreating && isFulfilled) {
      dispatch(getReceiver(router.query.receiverId));
    }
  }, [dispatch, isCreating, isFulfilled, router.query.receiverId]);

  return (
    <ReceiverContent
      receiversList={receiver?.data}
      isLoading={isLoading}
      isSending={isCreating}
      onSubmit={handleSubmitReceiver}
    />
  );
};

export default ReceiverContainer;
