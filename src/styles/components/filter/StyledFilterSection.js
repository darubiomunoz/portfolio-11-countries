import styled from 'styled-components';

import StyledSearchSection from '../search_bar/StyledSearchSection';

import { spacingExtraSmall } from '../../Variables';

const StyledFilterSection = styled(StyledSearchSection)`
  padding-top: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacingExtraSmall};
`;

export default StyledFilterSection;