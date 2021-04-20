import StyledFilterSection from '../styles/StyledFilterSection';
import StyledFilterDiv from '../styles/StyledFilterDiv';
import StyledLabel from '../styles/StyledLabel';
import StyledRadioInput from '../styles/StyledRadioInput';

const Filter = () => {
  return (
    <StyledFilterSection>
      <StyledFilterDiv>
        <StyledLabel for="Africa">Africa</StyledLabel>
        <StyledRadioInput id="Africa" name="category" type="radio" />
        <StyledLabel for="America">America</StyledLabel>
        <StyledRadioInput id="America" name="category" type="radio" />
        <StyledLabel for="Asia">Asia</StyledLabel>
        <StyledRadioInput id="Asia" name="category" type="radio" />
        <StyledLabel for="Europe">Europe</StyledLabel>
        <StyledRadioInput id="Europe" name="category" type="radio" />
        <StyledLabel for="Oceania">Oceania</StyledLabel>
        <StyledRadioInput id="Oceania" name="category" type="radio" />
      </StyledFilterDiv>
    </StyledFilterSection>
  );
}

export default Filter;