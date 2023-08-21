/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;

  if (cities.lenght === 0) {
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
