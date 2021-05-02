import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

import { fetchData } from "../features/countries/countriesSlice";

import StyledCountriesSection from "../styles/components/countries/StyledCountriesSection";
import StyledCard from "../styles/components/countries/StyledCard";
import StyledFlagImg from "../styles/components/countries/StyledFlagImg";
import StyledInfoArticle from "../styles/components/countries/StyledInfoArticle";
import StyledTitle from '../styles/components/countries/StyledTitle';
import StyledDetailsDiv from '../styles/components/countries/StyledDetailsDiv';
import StyledDetailSpan from '../styles/components/countries/StyledDetailSpan';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const countriesStatus = useSelector((state) => state.countries.status);

  useEffect(() => {
    if (countriesStatus === "idle") dispatch(fetchData());
  }, [countriesStatus, dispatch]);

  const formatNumber = (string) => {
    string += "";
    var x = string.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? `${"." + x[1]}` : "";
    var regex = /(\d+)(\d{3})/;

    while (regex.test(x1)) {
      x1 = x1.replace(regex, "$1" + "," + "$2");
    }

    return x1 + x2;
  };

  return (
    <StyledCountriesSection>
      {countries.length === 0 && <StyledTitle>Loading...</StyledTitle>}
      {countries.map((country) => {
        return (
          <StyledCard key={nanoid()}>
            <StyledFlagImg
              src={country.flag}
              alt={`Official flag of ${country.name}`}
              loading="lazy"
            />
            <StyledInfoArticle>
              <StyledTitle>{country.name}</StyledTitle>
              <StyledDetailsDiv>
                <StyledDetailSpan bold>Population:</StyledDetailSpan>
                <StyledDetailSpan>
                  {formatNumber(country.population)}
                </StyledDetailSpan>
              </StyledDetailsDiv>
              <StyledDetailsDiv>
                <StyledDetailSpan bold>Region:</StyledDetailSpan>
                <StyledDetailSpan>{country.region}</StyledDetailSpan>
              </StyledDetailsDiv>
              <StyledDetailsDiv>
                <StyledDetailSpan bold>Capital:</StyledDetailSpan>
                <StyledDetailSpan>{country.capital}</StyledDetailSpan>
              </StyledDetailsDiv>
            </StyledInfoArticle>
          </StyledCard>
        );
      })}
    </StyledCountriesSection>
  );
};

export default Countries;
