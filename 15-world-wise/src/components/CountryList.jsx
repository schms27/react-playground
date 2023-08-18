/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.lenght === 0) {
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  }

  const countries = cities.reduce((accArr, city) => {
    if (!accArr.map((el) => el.country).includes(city.country))
      return [...accArr, { country: city.country, emoji: city.emoji }];
    else return accArr;
  }, []);

  return (
    <ul className={styles.contryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
