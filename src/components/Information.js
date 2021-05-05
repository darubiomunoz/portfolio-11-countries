import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import StyledInfoSection from "../styles/components/information/StyledInfoSection";
import StyledInfoCard from '../styles/components/information/StyledInfoCard';
import StyledInfoFlagImg from '../styles/components/information/StyledInfoFlagImg';
import StyledArticle from '../styles/components/information/StyledArticle';

const Information = () => {
  const { alphacode } = useParams();
  const country = useSelector((state) =>
    state.countries.data.find(item => item.alpha3Code === alphacode)
  );
  console.log(country);

  return (
    <StyledInfoSection>
      <StyledInfoCard>
        <StyledInfoFlagImg src={country.flag} alt={`Official flag of ${country.name}`} />
        <StyledArticle>
          
        </StyledArticle>
      </StyledInfoCard>
    </StyledInfoSection>
  );
};

export default Information;
