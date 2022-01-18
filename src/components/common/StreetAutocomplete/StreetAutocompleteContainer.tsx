import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/redux";
import { getStreet } from "store/reducers/streetReducer/streetActions";
import StreetAutocomplete from "./StreetAutocomplete";

interface StreetAutocompleteContainerProps {
  index: number;
  cityRef: string;
  street: string;
  setFieldValue: (name: string, value: any) => void;
}

const StreetAutocompleteContainer: React.FC<StreetAutocompleteContainerProps> =
  ({ index, cityRef, street, setFieldValue }) => {
    const dispatch = useDispatch();

    const { result } = useAppSelector((state) => state.streetReducer);

    const handleGetOptions = useCallback(
      (value) => {
        dispatch(getStreet({ cityRef, value }));
      },
      [dispatch, cityRef]
    );

    return (
      <StreetAutocomplete
        options={result}
        index={index}
        street={street}
        onGetOptions={handleGetOptions}
        setFieldValue={setFieldValue}
      />
    );
  };

export default StreetAutocompleteContainer;
