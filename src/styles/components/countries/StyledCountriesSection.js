import styled from "styled-components";

import StyledSearchSection from "../search_bar/StyledSearchSection";

import { spacingNormal } from "../../Variables";

const StyledCountriesSection = styled(StyledSearchSection)`
  padding: 0;
  padding-bottom: ${spacingNormal};
  flex-direction: column;
  align-items: center;
  gap: ${spacingNormal};
  border: none;
  background-color: ${props => props.theme.background2};
`;

export default StyledCountriesSection;
