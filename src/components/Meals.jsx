import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import MealIteam from "./MealIteam";
import useHttps from "../hooks/useHttps";

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttps("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Loading meals...</p>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealIteam key={meal.name} meal={meal} />
      ))}
    </ul>
  );
}
