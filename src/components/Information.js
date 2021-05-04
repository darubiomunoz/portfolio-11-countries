import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import StyledInfoSection from "../styles/components/Information/StyledInfoSection";

const Information = () => {
  const { alphacode } = useParams();
  const country = useSelector((state) =>
    state.countries.data.find(item => item.alpha3Code === alphacode)
  );
  console.log(country);

  return <StyledInfoSection></StyledInfoSection>;
};

export default Information;
