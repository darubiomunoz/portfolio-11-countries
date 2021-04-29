import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { fetchData } from "../features/countries/countriesSlice";

import StyledCountriesSection from "../styles/components/StyledCountriesSection";
import StyledCard from "../styles/components/StyledCard";
import StyledFlagImg from "../styles/components/StyledFlagImg";
import StyledInfoArticle from "../styles/components/StyledInfoArticle";
import StyledTitle from '../styles/components/StyledTitle';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const countriesStatus = useSelector((state) => state.countries.status);

  useEffect(() => {
    if (countriesStatus === "idle") dispatch(fetchData());
    console.log(countries);
  }, [countriesStatus, dispatch]);

  return (
    <StyledCountriesSection>
      {countries.length === 0 && <h1>Loading...</h1>}
      {countries.map((country) => {
        return (
          <StyledCard key={nanoid()}>
            <StyledFlagImg
              src={country.flag}
              alt={`Official flag of ${country.name}`}
            />
            <StyledInfoArticle>
              <StyledTitle>{country.name}</StyledTitle>
            </StyledInfoArticle>
          </StyledCard>
        );
      })}
    </StyledCountriesSection>
  );
};

export default Countries;
