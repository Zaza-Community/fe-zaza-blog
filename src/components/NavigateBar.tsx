import { Link, Outlet } from 'react-router-dom';
import searchIcon from '../assets/search.svg';
import signinIcon from '../assets/signin.svg';

export default function NavigateBar() {
    return (
        <>
            <p className="heading center text-3xl">
                <Link className="title" to="/"> ZAZA </Link>
            </p>
            <nav role="menu-bar" className="bg-blue-700 flex justify-between flex-1 items-center">
                <ul role="menu-bar" className="bg-blue-700 text-amber-300">
                    <Link className="title" role="menu-item" aria-haspopup="false" to="/news">News</Link>
                    <Link className="title" role="menu-item" aria-haspopup="false" to="/tech">Tech</Link>
                    <Link className="title" role="menu-item" aria-haspopup="false" to="community">Community</Link>
                </ul>
                <div className="flex items-end">
                    <input className="content" aria-label="Example text box" type="text" placeholder="some cool text"/>
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

