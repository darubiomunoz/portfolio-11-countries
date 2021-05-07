import styled from 'styled-components';

import StyledSearchSection from '../search_bar/StyledSearchSection';

import { spacingExtraSmall, spacingNormal, device } from '../../Variables';

const StyledFilterSection = styled(StyledSearchSection)`
  width: 100%;
  max-width: 100vw;
  padding-top: 0;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacingExtraSmall};
  background-color: ${(props) => props.theme.background2};

  @media ${device.width1280} {
    width: 50%;
    padding-top: ${spacingNormal};
    align-items: flex-end;
  }
`;

export default StyledFilterSection;
