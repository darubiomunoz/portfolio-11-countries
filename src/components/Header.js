import StyledHeader from '../styles/StyledHeader';
import StyledTitle from '../styles/StyledTitle';
import StyledDarkButton from "../styles/StyledDarkButton";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkButton>
        <i className=""></i>
        Dark Mode
      </StyledDarkButton>
    </StyledHeader>
  );
}

export default Header;