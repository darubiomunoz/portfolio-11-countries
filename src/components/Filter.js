import StyledFilterSection from '../styles/StyledFilterSection';
import StyledFilterDiv from '../styles/StyledFilterDiv';
import StyledLabel from '../styles/StyledLabel';

const Filter = () => {
  return (
    <StyledFilterSection>
      <StyledFilterDiv>
        <StyledLabel for="Africa">Africa</StyledLabel>
        <StyledLabel for="America">America</StyledLabel>
        <StyledLabel for="Asia">Asia</StyledLabel>
        <StyledLabel for="Europe">Europe</StyledLabel>
        <StyledLabel for="Oceania">Oceania</StyledLabel>
      </StyledFilterDiv>
    </StyledFilterSection>
  );
}

export default Filter;