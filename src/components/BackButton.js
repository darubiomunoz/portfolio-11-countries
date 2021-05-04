import { Link } from "react-router-dom";

import StyledButtonSection from "../styles/components/back_button/StyledButtonSection";

const BackButton = () => {
  return (
    <StyledButtonSection>
      <Link to="/">
        <h1>button</h1>
      </Link>
    </StyledButtonSection>
  );
};

export default BackButton;
