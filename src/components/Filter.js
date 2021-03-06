import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import StyledFilterSection from "../styles/components/filter/StyledFilterSection";
import StyledFilterDiv from "../styles/components/filter/StyledFilterDiv";
import StyledLabel from "../styles/components/filter/StyledLabel";
import StyledRadioInput from "../styles/components/filter/StyledRadioInput";
import StyledFilterButton from "../styles/components/filter/StyledFilterButton";
import StyledFilterIcon from "../styles/components/filter/StyledFilterIcon";

import { updateFilter } from "../features/filter/filterSlice";
import { filterBy } from "../features/countries/countriesSlice";
import { updateSearch } from '../features/search/searchSlice';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const search = useSelector(state => state.search);
  const dropDownMenu = useRef();
  const dropDownButton = useRef();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFiltering = (event) => {
    const category = event.target.htmlFor;
    console.log(search);
    if(search !== '') dispatch(updateSearch({ search: '' }));
    dispatch(updateFilter({ category }));
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(filterBy({ filter }));
  }, [filter]);

  useEffect(() => {
    let handleClickOutside = (event) => {
      if(!dropDownMenu.current.contains(event.target) && !dropDownButton.current.contains(event.target)) setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])



  return (
    <StyledFilterSection>
      <StyledFilterButton onClick={handleClick} ref={dropDownButton}>
        {filter}
        <StyledFilterIcon className={`fas fa-angle-${open ? "up" : "down"}`} />
      </StyledFilterButton>
      <StyledFilterDiv
        invisible={open ? "" : "invisible"}
        ref={dropDownMenu}
        tabIndex={open ? "0" : ""}
      >
        {filter !== "Filter by Region" && (
          <>
            <StyledLabel
              htmlFor="Filter by Region"
              onClick={(event) => handleFiltering(event)}
              tabIndex={open ? "0" : ""}
            >
              Filter by Region
            </StyledLabel>
            <StyledRadioInput
              id="Filter by Region"
              value="Filter by Region"
              name="category"
              type="radio"
            />
          </>
        )}
        <StyledLabel
          htmlFor="Africa"
          onClick={(event) => handleFiltering(event)}
          tabIndex={open ? "0" : ""}
        >
          Africa
        </StyledLabel>
        <StyledRadioInput
          id="Africa"
          value="Africa"
          name="category"
          type="radio"
        />
        <StyledLabel
          htmlFor="America"
          onClick={handleFiltering}
          tabIndex={open ? "0" : ""}
        >
          America
        </StyledLabel>
        <StyledRadioInput
          id="America"
          value="America"
          name="category"
          type="radio"
        />
        <StyledLabel
          htmlFor="Asia"
          onClick={handleFiltering}
          tabIndex={open ? "0" : ""}
        >
          Asia
        </StyledLabel>
        <StyledRadioInput id="Asia" value="Asia" name="category" type="radio" />
        <StyledLabel
          htmlFor="Europe"
          onClick={handleFiltering}
          tabIndex={open ? "0" : ""}
        >
          Europe
        </StyledLabel>
        <StyledRadioInput
          id="Europe"
          value="Europe"
          name="category"
          type="radio"
        />
        <StyledLabel
          htmlFor="Oceania"
          onClick={handleFiltering}
          tabIndex={open ? "0" : ""}
        >
          Oceania
        </StyledLabel>
        <StyledRadioInput
          id="Oceania"
          value="Oceania"
          name="category"
          type="radio"
        />
      </StyledFilterDiv>
    </StyledFilterSection>
  );
};

export default Filter;
