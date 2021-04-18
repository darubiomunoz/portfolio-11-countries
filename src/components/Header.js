import StyledHeader from "../styles/StyledHeader";
import StyledTitle from "../styles/StyledTitle";
import StyledDarkButton from "../styles/StyledDarkButton";
import StyledIcon from "../styles/StyledIcon";


const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkButton>
        <StyledIcon className="far fa-moon" />
        Dark Mode
      </StyledDarkButton>
    </StyledHeader>
  );
};

export default Header;
