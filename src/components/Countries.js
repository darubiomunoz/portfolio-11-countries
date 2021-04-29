import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/countries/countriesSlice";

import StyledCountriesSection from "../styles/StyledCountriesSection";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const countriesStatus = useSelector((state) => state.countries.status);

  useEffect(() => {
    if(countriesStatus === 'idle') dispatch(fetchData());
    console.log(countries);
  }, [countriesStatus, dispatch]);

  console.log(countries)

  return (
    <StyledCountriesSection>
      {countries.length === 0 && <h1>Loading...</h1>}
      {/* {countries.map()} */}
    </StyledCountriesSection>
  );
};

export default Countries;
