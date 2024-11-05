import { Link, Outlet } from 'react-router-dom';
import searchIcon from '../assets/search.svg';
import signinIcon from '../assets/signin.svg';

export default function Nav() {
    return (
        <>
            <p className="heading center text-3xl">
                <Link to="/"> ZAZA </Link>
            </p>
            <nav role="menu-bar" className="bg-blue-700 flex justify-between flex-1 items-center">
                <ul role="menu-bar" className="bg-blue-700 text-amber-300">
                    <li role="menu-item" aria-haspopup="false">
                        <Link to="/news">News</Link>
                    </li>
                    <li role="menu-item" aria-haspopup="false">
                        <Link to="/tech">Tech</Link>
                    </li>
                    <li role="menu-item" aria-haspopup="false">
                        <Link to="community">Community</Link>
                    </li>
                </ul>
                <div className="flex items-end">
                    <input aria-label="Example text box" type="text" placeholder="some cool text"/>
                    <button className="bg-blue-700 btn">
                        <img src={searchIcon} alt="search-icon"/>
                    </button>
                    <button className="bg-blue-700 btn">
                        <img src={signinIcon} alt="signin-icon"/>
                    </button>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}
