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
}

export default CategoriesList;
