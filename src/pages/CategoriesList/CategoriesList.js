import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './categoriesList.css';
import Start from '../Start/Start';

function CategoriesList() {


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

                <div className='menu'>
                    <button ><Link to='/quiz/dogs'>Dogs</Link></button>
                    <button ><Link to='/quiz/flags'>Flags</Link></button>
                    <button ><Link to='/quiz/movies'>Movies</Link></button>
                </div>

                <Routes>
                    <Route path='/quiz/:category' element={<Start />} />
                </Routes>

            </Router>

        </>
    );
}

export default CategoriesList;
