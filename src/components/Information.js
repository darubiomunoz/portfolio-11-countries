import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import useFormatNumber from '../hooks/useFormatNumber';

import StyledInfoSection from "../styles/components/information/StyledInfoSection";
import StyledInfoCard from "../styles/components/information/StyledInfoCard";
import StyledInfoFlagImg from "../styles/components/information/StyledInfoFlagImg";
import StyledArticle from "../styles/components/information/StyledArticle";
import StyledInfoParagraph from "../styles/components/information/StyledInfoParagraph";

import StyledTitle from "../styles/components/countries/StyledTitle";
import StyledDetailsDiv from "../styles/components/countries/StyledDetailsDiv";
import StyledDetailSpan from "../styles/components/countries/StyledDetailSpan";

import StyledBackButton from "../styles/components/back_button/StyledBackButton";

const Information = () => {
  const { alphacode } = useParams();
  const country = useSelector((state) =>
    state.countries.data.find((item) => item.alpha3Code === alphacode)
  );
  const formatNumber = useFormatNumber();

  return (
    <StyledInfoSection>
      <StyledInfoCard>
        <StyledInfoFlagImg
          src={country.flag}
          alt={`Official flag of ${country.name}`}
        />
        <StyledArticle>
          <StyledTitle noMargin>{country.name}</StyledTitle>
          <StyledInfoParagraph>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Native Name:</StyledDetailSpan>
              <StyledDetailSpan>{country.nativeName === '' ? 'No Data' : country.nativeName}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Population:</StyledDetailSpan>
              <StyledDetailSpan>{country.population === '' ? 'No Data' : formatNumber(country.population)}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Region:</StyledDetailSpan>
              <StyledDetailSpan>{country.region === '' ? 'No Data' : country.region}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Sub-Region:</StyledDetailSpan>
              <StyledDetailSpan>{country.subregion === '' ? 'No Data' : country.region}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Capital:</StyledDetailSpan>
              <StyledDetailSpan>{country.capital === '' ? 'No Data' : country.capital}</StyledDetailSpan>
            </StyledDetailsDiv>
          </StyledInfoParagraph>
          <StyledInfoParagraph>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Top Level Domain:</StyledDetailSpan>
              <StyledDetailSpan>{country.topLevelDomain === '' ? 'No Data' : country.topLevelDomain}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Currencies:</StyledDetailSpan>
              <StyledDetailSpan>{country.currencies[0].name === '' ? 'No Data' : country.currencies[0].name}</StyledDetailSpan>
            </StyledDetailsDiv>
            <StyledDetailsDiv>
              <StyledDetailSpan bold>Language(s):</StyledDetailSpan>
              <StyledDetailSpan>
                {country.languages.length === 0 ? 'No Data' : country.languages.map((language) => ` ${language.name},`)}
              </StyledDetailSpan>
            </StyledDetailsDiv>
          </StyledInfoParagraph>
          <StyledInfoParagraph>
            <StyledDetailsDiv column>
              <StyledDetailSpan bold>Border Countries:</StyledDetailSpan>
              <StyledDetailsDiv>
                {country.borders.length === 0 ? <StyledDetailSpan>{`${country.name} does not share borders with any country.`}</StyledDetailSpan> : country.borders.map((code) => {
                  return (
                    <Link to={`/country/${code}`} key={nanoid()}>
                      <StyledBackButton big>
                        {code}
                      </StyledBackButton>
                    </Link>
                  );
                })}
              </StyledDetailsDiv>
            </StyledDetailsDiv>
          </StyledInfoParagraph>
        </StyledArticle>
      </StyledInfoCard>
    </StyledInfoSection>
  );
};

export default Information;
