import styled from 'styled-components';

import StyledCard from '../countries/StyledCard'

import { device } from '../../Variables';

const StyledInfoCard = styled(StyledCard)`
  width: 85%;
  padding-top: 0;
  background-color: transparent;
  box-shadow: none;
  cursor: unset;

  @media ${device.width1280} {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default StyledInfoCard;