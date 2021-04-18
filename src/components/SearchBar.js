import StyledSearchSection from '../styles/StyledSearchSection';
import StyledInputIcon from '../styles/StyledInputIcon';
import StyledDiv from '../styles/StyledDiv';
import StyledInput from '../styles/StyledInput';

const SearchBar = () => {
  return (
    <StyledSearchSection>
      <StyledDiv>
        <StyledInputIcon className="fas fa-search" />
        <StyledInput placeholder="Search for a country..." />
      </StyledDiv>
    </StyledSearchSection>
  );
};

export default SearchBar;