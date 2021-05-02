import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StyledFilterSection from "../styles/components/filter/StyledFilterSection";
import StyledFilterDiv from "../styles/components/filter/StyledFilterDiv";
import StyledLabel from "../styles/components/filter/StyledLabel";
import StyledRadioInput from "../styles/components/filter/StyledRadioInput";
import StyledFilterButton from "../styles/components/filter/StyledFilterButton";
import StyledFilterIcon from "../styles/components/filter/StyledFilterIcon";

import { updateFilter } from "../features/filter/filterSlice";
import { filterBy } from '../features/countries/countriesSlice';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFiltering = (event) => {
    const category = event.target.htmlFor;
    dispatch(updateFilter({ category }));
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(filterBy({ filter }));
  }, [filter]);

  return (
    <StyledFilterSection>
      <StyledFilterButton onClick={handleClick}>
        {filter}
        <StyledFilterIcon className={`fas fa-angle-${open ? "up" : "down"}`} />
      </StyledFilterButton>
      <StyledFilterDiv invisible={open ? "" : "invisible"}>
        <StyledLabel
          htmlFor="Africa"
          onClick={(event) => handleFiltering(event)}
        >
          Africa
        </StyledLabel>
        <StyledRadioInput
          id="Africa"
          value="Africa"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="America" onClick={handleFiltering}>
          America
        </StyledLabel>
        <StyledRadioInput
          id="America"
          value="America"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="Asia" onClick={handleFiltering}>
          Asia
        </StyledLabel>
        <StyledRadioInput id="Asia" value="Asia" name="category" type="radio" />
        <StyledLabel htmlFor="Europe" onClick={handleFiltering}>
          Europe
        </StyledLabel>
        <StyledRadioInput
          id="Europe"
          value="Europe"
          name="category"
          type="radio"
        />
        <StyledLabel htmlFor="Oceania" onClick={handleFiltering}>
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
