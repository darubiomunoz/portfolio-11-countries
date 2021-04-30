import StyledSearchSection from '../styles/components/search_bar/StyledSearchSection';
import StyledInputIcon from '../styles/components/search_bar/StyledInputIcon';
import StyledDiv from '../styles/components/search_bar/StyledDiv';
import StyledInput from '../styles/components/search_bar/StyledInput';

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