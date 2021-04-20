import StyledCountriesSection from '../styles/StyledCountriesSection';

const Countries = ({ children }) => {
  return (
    <StyledCountriesSection>
      {children}
    </StyledCountriesSection>
  );
}

export default Countries;