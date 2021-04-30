import styled from "styled-components";

import StyledSearchSection from "../../StyledSearchSection";

import { spacingNormal, spacingRegular } from "../../Variables";

const StyledCountriesSection = styled(StyledSearchSection)`
  padding: 0;
  padding-bottom: ${spacingNormal};
  flex-direction: column;
  align-items: center;
  gap: ${spacingNormal};
`;

export default StyledCountriesSection;
