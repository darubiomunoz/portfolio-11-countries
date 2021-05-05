import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StyledSearchSection from '../styles/components/search_bar/StyledSearchSection';
import StyledInputIcon from '../styles/components/search_bar/StyledInputIcon';
import StyledDiv from '../styles/components/search_bar/StyledDiv';
import StyledInput from '../styles/components/search_bar/StyledInput';

import { updateSearch } from '../features/search/searchSlice';
import { searchBy } from '../features/countries/countriesSlice';
import { updateFilter } from '../features/filter/filterSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const filter = useSelector(state => state.filter);

  const handleChange = event => {
    const search = event.target.value;
    if(filter !== 'Filter by Region') dispatch(updateFilter({ category: 'Filter by Region' }))
    dispatch(updateSearch({ search }));
  }

  useEffect(() => {
    dispatch(searchBy({ search }));
  }, [search]);

  return (
    <StyledSearchSection>
      <StyledDiv>
        <StyledInputIcon className="fas fa-search" />
        <StyledInput placeholder="Search for a country..." onChange={event => handleChange(event)} />
      </StyledDiv>
    </StyledSearchSection>
  );
};

export default SearchBar;