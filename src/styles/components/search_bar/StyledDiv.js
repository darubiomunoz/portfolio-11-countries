import styled from 'styled-components';

import { spacingNormal, spacingRegular, borderRadiusExtraSmall, device } from '../../Variables'

const StyledDiv = styled.div`
  width: 100%;
  height: ${spacingNormal};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacingRegular};
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};
  color: ${(props) => props.theme.text1};
  box-shadow: ${(props) => props.theme.shadow};

  @media ${device.width1280} {
    width: 70%;
  }
`;

export default StyledDiv;