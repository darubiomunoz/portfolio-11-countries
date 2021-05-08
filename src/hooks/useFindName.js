import { useSelector } from 'react-redux';

export default function useFindName() {
  const countries = useSelector(state => state.countries.dataSafeCopy);
  
  const findName = code => {
    const country = countries.find(country => country.alpha3Code === code);
    return country.name;
  };

  return findName;
};
