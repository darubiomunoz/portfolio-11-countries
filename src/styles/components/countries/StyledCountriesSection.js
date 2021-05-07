import styled from "styled-components";

import StyledSearchSection from "../search_bar/StyledSearchSection";

import { spacingNormal, device } from "../../Variables";

const StyledCountriesSection = styled(StyledSearchSection)`
  padding: 0;
  padding-bottom: ${spacingNormal};
  flex-direction: column;
  align-items: center;
  gap: ${spacingNormal};
  border: none;
  background-color: ${props => props.theme.background2};

  @media ${device.width600} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${device.width1280} {
    width: 100%;
    padding: ${spacingNormal};
    justify-content: space-evenly;
  }
`;

export default StyledCountriesSection;
