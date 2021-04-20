import StyledFilterSection from '../styles/StyledFilterSection';
import StyledFilterDiv from '../styles/StyledFilterDiv';
import StyledLabel from '../styles/StyledLabel';
import StyledRadioInput from '../styles/StyledRadioInput';
import StyledFilterButton from '../styles/StyledFilterButton';
import StyledFilterIcon from '../styles/StyledFilterIcon';

const Filter = () => {
  return (
    <StyledFilterSection>
      <StyledFilterButton>
        Filter by Region
        <StyledFilterIcon className="fas fa-angle-down" />
      </StyledFilterButton>
      <StyledFilterDiv>
        <StyledLabel for="Africa">Africa</StyledLabel>
        <StyledRadioInput
          id="Africa"
          value="Africa"
          name="category"
          type="radio"
        />
        <StyledLabel for="America">America</StyledLabel>
        <StyledRadioInput
          id="America"
          value="America"
          name="category"
          type="radio"
        />
        <StyledLabel for="Asia">Asia</StyledLabel>
        <StyledRadioInput id="Asia" value="Asia" name="category" type="radio" />
        <StyledLabel for="Europe">Europe</StyledLabel>
        <StyledRadioInput
          id="Europe"
          value="Europe"
          name="category"
          type="radio"
        />
        <StyledLabel for="Oceania">Oceania</StyledLabel>
        <StyledRadioInput
          id="Oceania"
          value="Oceania"
          name="category"
          type="radio"
        />
      </StyledFilterDiv>
    </StyledFilterSection>
  );
}

export default Filter;