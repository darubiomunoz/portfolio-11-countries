import styled from 'styled-components';

import { colorOption4, colorOption5, spacingNormal, spacingRegular, boxShadow, borderRadiusExtraSmall } from './Variables'

const StyledDiv = styled.div`
  width: 100%;
  height: ${spacingNormal};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacingRegular};
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${colorOption5};
  color: ${colorOption4};
  box-shadow: ${boxShadow};
`;

export default StyledDiv;