import { useState, useEffect } from "react";
import getMeals from "../../api/mealsApi";

function Meals(props) {
    
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    getMeals()
      .then((res) => res.text())
      .then((res) => {
        // console.log(JSON.parse(res));
        setMeals(JSON.parse(res).meals);
      });
  }, []);

  return (
    <div className="container">
      {meals && meals.length>0 && <img src={meals[0].strMealThumb} />}
    </div>
  );
}

export default Meals;
