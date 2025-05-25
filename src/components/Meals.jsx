import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import MealIteam from "./MealIteam";
import useHttps from "../hooks/useHttps";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttps("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealIteam key={meal.name} meal={meal} />
      ))}
    </ul>
  );
}
