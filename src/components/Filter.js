import StyledFilterSection from '../styles/components/filter/StyledFilterSection';
import StyledFilterDiv from '../styles/components/filter/StyledFilterDiv';
import StyledLabel from '../styles/components/filter/StyledLabel';
import StyledRadioInput from '../styles/components/filter/StyledRadioInput';
import StyledFilterButton from '../styles/components/filter/StyledFilterButton';
import StyledFilterIcon from '../styles/components/filter/StyledFilterIcon';

const Filter = () => {
  return (
    <StyledFilterSection>
      <StyledFilterButton>
        Filter by Region
        <StyledFilterIcon className="fas fa-angle-down" />
      </StyledFilterButton>
      <StyledFilterDiv>
        <StyledLabel htmlFor="Africa">Africa</StyledLabel>
        <StyledRadioInput
          id="Africa"
          value="Africa"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="America">America</StyledLabel>
        <StyledRadioInput
          id="America"
          value="America"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="Asia">Asia</StyledLabel>
        <StyledRadioInput id="Asia" value="Asia" name="category" type="radio" />
        <StyledLabel htmlFor="Europe">Europe</StyledLabel>
        <StyledRadioInput
          id="Europe"
          value="Europe"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="Oceania">Oceania</StyledLabel>
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