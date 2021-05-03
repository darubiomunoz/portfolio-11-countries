import styled from 'styled-components';

import StyledSearchSection from '../search_bar/StyledSearchSection';

import { spacingExtraSmall } from '../../Variables';

const StyledFilterSection = styled(StyledSearchSection)`
  width: 100%;
  max-width: 100vw;
  padding-top: 0;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacingExtraSmall};
  background-color: ${(props) => props.theme.background2};
`;

export default StyledFilterSection;
