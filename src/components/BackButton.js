import { Link } from "react-router-dom";

import StyledButtonSection from "../styles/components/back_button/StyledButtonSection";
import StyledBackButton from "../styles/components/back_button/StyledBackButton";
import StyledIcon from '../styles/components/header/StyledIcon';

const BackButton = () => {
  return (
    <StyledButtonSection>
      <Link to="/">
        <StyledBackButton>
          <StyledIcon className="fas fa-long-arrow-alt-left" />
          Back
        </StyledBackButton>
      </Link>
    </StyledButtonSection>
  );
};

export default BackButton;
