//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import CategoriesList from "./pages/CategoriesList/CategoriesList";
import useSound from "use-sound";
import { useEffect } from "react";

function App() {
  // const [startPlay] = useSound(play)

  // useEffect(() => {
  //   startPlay();
  // }, [startPlay])
  return (
    <>
      <div>
        <CategoriesList />
      </div>
    </>
  );
}

export default App;
