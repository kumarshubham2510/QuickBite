import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import MealIteam from "./MealIteam";
export default function Meals() {
  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setLoading(false);
      setMeals(data);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealIteam key={meal.name} meal={meal} />
      ))}
    </ul>
  );
}
