<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./categoriesList.css";
import Start from "../Start/Start";

function CategoriesList() {
  return (
    <>
      <Router>
        <div class="bg-blue-300 h-screen flex items-center justify-center">
          <div class="bg-gradient-to-r from-rose-300 via-rose-500 to-rose-600 p4 rounded-lg w-full">
            <div class="flex items-center gap-2">
              <img
                class="h-35 w-32 object-cover rounded-md pt-2"
                src="https://i.postimg.cc/bJhxJxSF/Tom-Cruise.png"
                alt=""
              />
              <span class="w-24 h-8 object-cover rounded-full m-10 shadow-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-300 flex justify-center items-center">
                <Link exact to="/quiz/movies">Movies</Link>
              </span>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/quiz/:category" element={<Start />} />
        </Routes>
      </Router>
    </>
  );
=======
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CategoryContext from "../../context/CategoryContext";

import './categoriesList.css';
import Start from '../Start/Start';

function CategoriesList() {

    const [categoryChoosen, setCategoryChoosen] = useState(false);

    const chooseCategory = () => {
        setCategoryChoosen(true);
    }

    return (
        <>
            <Router>
                {/* {<nav>
                    <ul>
                        <li><Link to='/quiz/movies'>Movies</Link></li>
                        <li><Link to='/quiz/dogs'>Dogs</Link></li>
                        <li><Link to='/quiz/flags'>Flags</Link></li>
                        { <li><Link to='/quiz/meals'>Dishes</Link></li>}
                    </ul>
                </nav>
                } */}

                { !categoryChoosen && <div className='menu'>
                    <button onClick={chooseCategory}><Link to='/quiz/dogs'>Dogs</Link></button>
                    <button onClick={chooseCategory}><Link to='/quiz/flags'>Flags</Link></button>
                    <button onClick={chooseCategory}><Link to='/quiz/movies'>Movies</Link></button>
                    <button onClick={chooseCategory}><Link to='/quiz/meals'>Meals</Link></button>
                </div>}

                <Routes>
                    
                        <Route path='/quiz/:category' element={
                            <CategoryContext.Provider value={{ categoryChoosen, setCategoryChoosen }}>
                                {categoryChoosen && <Start />}
                            </CategoryContext.Provider>
                        } />
                    

                </Routes>

            </Router>

        </>
    );
>>>>>>> 0ab1cd15563fbc9b307e50bf755ef94b11a1b251
}

export default CategoriesList;
