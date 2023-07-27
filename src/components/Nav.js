import { BrowserRouter, Link } from 'react-router-dom';
function Nav(){
    return(
        <BrowserRouter>
        <nav> <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/"> About </Link> </li>
            <li> <Link to="/"> Contact </Link> </li>
            </ul> </nav>
        </BrowserRouter>
    );
};

export default Nav;