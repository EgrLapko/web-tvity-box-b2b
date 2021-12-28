import React, { useCallback } from "react";
import CitiesAutocomplete from "./CitiesAutocomplete";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/redux";
import { getCities } from "store/reducers/citiesReducer/citiesActions";
interface CitiesAutocompleteContainerProps {
  index: number;
  city: string;
  setFieldValue: (name: string, value: any) => void;
  onSetCityRef: (value: string) => void;
}

const CitiesAutocompleteContainer: React.FC<CitiesAutocompleteContainerProps> =
  ({ index, city, onSetCityRef, setFieldValue }) => {
    const dispatch = useDispatch();

    const { result } = useAppSelector((state) => state.citiesReducer);

    const handleGetOptions = useCallback(
      (value) => dispatch(getCities(value)),
      [dispatch]
    );

    return (
      <CitiesAutocomplete
        options={result}
        index={index}
        city={city}
        onGetOptions={handleGetOptions}
        onSetCityRef={onSetCityRef}
        setFieldValue={setFieldValue}
      />
    );
  };

export default CitiesAutocompleteContainer;
