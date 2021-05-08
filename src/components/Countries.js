import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useFormatNumber from '../hooks/useFormatNumber';

import { nanoid } from "@reduxjs/toolkit";

import { fetchData } from "../features/countries/countriesSlice";

import StyledCountriesSection from "../styles/components/countries/StyledCountriesSection";
import StyledCard from "../styles/components/countries/StyledCard";
import StyledFlagImg from "../styles/components/countries/StyledFlagImg";
import StyledInfoArticle from "../styles/components/countries/StyledInfoArticle";
import StyledTitle from "../styles/components/countries/StyledTitle";
import StyledDetailsDiv from "../styles/components/countries/StyledDetailsDiv";
import StyledDetailSpan from "../styles/components/countries/StyledDetailSpan";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const countriesStatus = useSelector((state) => state.countries.status);

  const formatNumber = useFormatNumber();

  useEffect(() => {
    if (countriesStatus === "idle") dispatch(fetchData());
  }, [countriesStatus, dispatch]);

  return (
    <StyledCountriesSection>
      {countriesStatus !== "fulfilled" && <StyledTitle>Loading...</StyledTitle>}
      {(countries.length === 0 && countriesStatus === 'fulfilled') && (
        <StyledTitle>Country not found...</StyledTitle>
      )}
      {countries.map((country) => {
        return (
          <StyledCard key={nanoid()}>
            <Link to={`/country/${country.alpha3Code}`}>
              <StyledFlagImg
                src={country.flag}
                alt={`Official flag of ${country.name}`}
                loading="lazy"
                tabIndex="0"
              />
              <StyledInfoArticle>
                <StyledTitle tabIndex="0">{country.name}</StyledTitle>
                <StyledDetailsDiv>
                  <StyledDetailSpan bold tabIndex="0">
                    Population:
                  </StyledDetailSpan>
                  <StyledDetailSpan tabIndex="0">
                    {country.population === ""
                      ? "No Data"
                      : formatNumber(country.population)}
                  </StyledDetailSpan>
                </StyledDetailsDiv>
                <StyledDetailsDiv>
                  <StyledDetailSpan bold tabIndex="0">
                    Region:
                  </StyledDetailSpan>
                  <StyledDetailSpan tabIndex="0">
                    {country.region === "" ? "No Data" : country.region}
                  </StyledDetailSpan>
                </StyledDetailsDiv>
                <StyledDetailsDiv>
                  <StyledDetailSpan bold tabIndex="0">
                    Capital:
                  </StyledDetailSpan>
                  <StyledDetailSpan tabIndex="0">
                    {country.capital === "" ? "No Data" : country.capital}
                  </StyledDetailSpan>
                </StyledDetailsDiv>
              </StyledInfoArticle>
            </Link>
          </StyledCard>
        );
      })}
    </StyledCountriesSection>
  );
};

export default Countries;
